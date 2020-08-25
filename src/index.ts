import * as cp from 'child_process';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, relative } from 'path';
import {
	Project,
	ExportedDeclarations,
	SourceFile,
	Node,
	JSDoc,
	FunctionDeclaration,
	ClassDeclaration,
	MethodDeclaration,
	ClassMemberTypes,
	PropertyDeclaration,
	InterfaceDeclaration,
	PropertySignature,
} from 'ts-morph';
import {
	format as prettier,
	resolveConfig,
	Options as PrettierOptions,
} from 'prettier';
import { stripIndents } from 'common-tags';
import * as rimraf from 'rimraf';

export async function generateApi(
	barrelsGlob: string,
	outputDirectory: string,
) {
	const files = getBarrelFiles(barrelsGlob);
	const output = files
		.map(generateApiForFile)
		.reduce((acc, file) => acc.concat(file), []);

	rimraf.sync(outputDirectory);
	writeFile(outputDirectory, 'output.json', JSON.stringify(output), 'json');
	await createMarkdown(outputDirectory, output);
}

function getBarrelFiles(barrelsGlob: string) {
	const project = new Project();
	project.addSourceFilesAtPaths(barrelsGlob.split(','));
	const files = project.getSourceFiles();
	return files;
}

function generateApiForFile(sourceFile: SourceFile) {
	const module = sourceFile.getDirectory().getBaseName();
	const exportDeclarations = sourceFile.getExportedDeclarations();
	const entries = exportDeclarations.entries();
	let entry: IteratorResult<[string, ExportedDeclarations[]]>;

	const fileOutput: Output[] = [];
	while ((entry = entries.next()) && !entry.done) {
		const [name, declarations] = entry.value as [
			string,
			ExportedDeclarations[],
		];
		const [declaration] = declarations;
		if (!declaration) continue;
		const kind = declaration.getKindName();

		const kindToFormatter: {
			[key: string]: (declaration: ExportedDeclarations) => Output['overloads'];
		} = {
			FunctionDeclaration: formatFunctionDeclaration,
			ClassDeclaration: formatClassDeclaration,
			InterfaceDeclaration: formatInterfaceDeclaration,
			VariableDeclaration: formatVariableDeclaration,
			TypeAliasDeclaration: formatTypeAliasDeclaration,
			EnumDeclaration: formatEnumDeclaration,
		};
		const declarationFormatter = kindToFormatter[kind];
		if (declarationFormatter) {
			fileOutput.push({
				kind,
				module,
				name,
				overloads: declarationFormatter(declaration),
			});
		} else {
			if (kind !== 'SourceFile') {
				console.error(
					`No formatter found for "${kind}", create an issue at https://github.com/timdeschryver/docs-md/issues/new`,
				);
			}
		}
	}

	return fileOutput;
}

async function createMarkdown(outputDirectory: string, output: Output[]) {
	let repoUrl = await git(['config --get remote.origin.url']);
	repoUrl = repoUrl.trim().replace('.git', '') + '/blob/master/';
	for (const out of output) {
		const directory = join(
			outputDirectory,
			toFileName(out.module),
			toFileName(out.kind),
		);
		const file = toFileName(out.name);

		const overloadToText = (
			overload: Output['overloads'][0],
			headerLevel = 2,
			parent = '',
		) => {
			const createHeader = (title: string, headerlevelOverride = headerLevel) =>
				parent
					? `${'#'.repeat(
							headerlevelOverride,
					  )} ${title} (#${parent}-${toFileName(title)})`
					: `${'#'.repeat(headerlevelOverride)} ${title}`;
			const sections = overload.info.reduce((section, [title, value]) => {
				if (value.__kind === 'heading') {
					section[title] = section[title] || `${createHeader(title)}`;
					section[title] += `\n${value.description}`;
				} else if (value.__kind === 'table') {
					const headerTitle =
						{
							param: 'Parameters',
							property: 'Properties',
						}[title] || title;
					section[title] =
						section[title] ||
						stripIndents`
              ${createHeader(headerTitle)}

              | Name  | Type | Description  |
              | ----- |----- | ------------ |`;
					section[
						title
					] += `\n| ${value.label} | \`${value.type}\` | ${value.description} |`;
				} else if (value.__kind === 'info') {
					// must be unique, otherwise it will get appended
					section[title] = section[title] || createHeader('Methods');
					const infoMd = overloadToText(
						value.info,
						headerLevel + 2,
						value.header,
					);
					section[title] += `\n ${createHeader(
						value.header,
						headerLevel + 1,
					)}\n${infoMd}`;
				}
				return section;
			}, {} as { [title: string]: string });

			const { description, ...sectionsToDocs } = sections;
			const sectionsText = Object.values(sectionsToDocs).join('\n');
			const text = stripIndents`
        ${description || ''}

        \`\`\`ts
        ${overload.signature}
        \`\`\`

        [Link to repo](${repoUrl}${overload.file})

        ${sectionsText}
      `;
			return text;
		};

		const implementationToText = (overload: Output['overloads'][0]) => {
			return overloadToText(overload);
		};

		const overloadsToText = (overloads: Output['overloads'][0][]) => {
			if (overloads.length === 0) return '';

			return stripIndents`
        ## Overloads

        ${overloads.map((o) => overloadToText(o, 3)).join('\n')}
      `;
		};

		const [implementation, ...overloads] = out.overloads;
		const md = stripIndents`
      ---
      kind: ${out.kind}
      name: ${out.name}
      module: ${out.module}
      ---

      # ${out.name}

      ${implementationToText(implementation)}
      ${overloadsToText(overloads)}`;

		writeFile(directory, file + '.md', md, 'markdown');
	}
}

function formatFunctionDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isFunctionDeclaration(declaration)) {
		throw Error('Declaration is not a function');
	}

	const implementation = declaration.getImplementation();
	const overloads = declaration.getOverloads();

	const removeExportFromSignature = (text: string) =>
		text.startsWith('export') ? text.substr(7) : text;

	return [
		implementation
			? {
					file: fileWithLineNumbers(implementation),
					signature: format(
						removeExportFromSignature(getSignature(implementation)),
					),
					info: getInformationWithParemetersInfo(implementation),
			  }
			: null,
		...overloads.map((overload) => {
			return {
				file: fileWithLineNumbers(overload),
				signature: format(removeExportFromSignature(overload.getText())),
				info: getInformationWithParemetersInfo(overload),
			};
		}),
	].filter(Boolean);
}

function formatVariableDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isVariableDeclaration(declaration)) {
		throw Error('Declaration is not a variable');
	}

	const name = declaration.getName();
	const type = declaration.getType().getText(declaration);
	const signature = `const ${name}: ${type}`;

	return [
		{
			file: fileWithLineNumbers(declaration),
			signature: format(signature),
			info: [],
		},
	];
}

function formatTypeAliasDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isTypeAliasDeclaration(declaration)) {
		throw Error('Declaration is not a type alias');
	}

	return [
		{
			file: fileWithLineNumbers(declaration),
			signature: format(declaration.getText()),
			info: getInformation(declaration.getJsDocs()),
		},
	];
}

function formatEnumDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isEnumDeclaration(declaration)) {
		throw Error('Declaration is not an enum');
	}

	return [
		{
			file: fileWithLineNumbers(declaration),
			signature: format(declaration.getText()),
			info: getInformation(declaration.getJsDocs()),
		},
	];
}

function formatInterfaceDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isInterfaceDeclaration(declaration)) {
		throw Error('Declaration is not an interface');
	}

	const createSignature = () => {
		const name = declaration.getName();
		const types = declaration.getTypeParameters().map((p) => p.getText());
		const properties = declaration.getProperties().map((p) => p.getText());
		const extendedproperties = declaration
			.getBaseDeclarations()
			.map((b) =>
				Node.isInterfaceDeclaration(b)
					? [
							``,
							`// inherited from ${b.getName()}`,
							...b.getProperties().map((p) => p.getText()),
					  ]
					: [],
			)
			.reduce((props, prop) => props.concat(prop), []);
		const allProperties = properties.concat(extendedproperties);

		let signature = `interface ${name}`;

		if (types.length) {
			signature += `<${types.join(', ')}>`;
		}
		signature += `{\n${allProperties.join('\n')}\n}`;
		return format(signature);
	};

	return [
		{
			file: fileWithLineNumbers(declaration),
			signature: createSignature(),
			info: getInformationWithPropertyInfo(declaration),
		},
	];
}

function formatClassDeclaration(
	declaration: ExportedDeclarations,
): Output['overloads'] {
	if (!Node.isClassDeclaration(declaration)) {
		throw Error('Declaration is not a class');
	}

	const createSignature = () => {
		let name = declaration.getName();
		const types = declaration.getTypeParameters().map((p) => p.getText());
		const extend = declaration.getExtends()?.getText();
		const implement = declaration.getImplements().map((p) => p.getText());
		const publicProperties = (getPublicProperties(declaration) as any[])
			.map((p: PropertySignature | PropertyDeclaration) => p.getText())
			.map(removeComments);

		const publicMethods = getPublicMethods(declaration).map(getSignature);

		let signature = `class ${name}`;

		if (types.length) {
			signature += `<${types.join(', ')}>`;
		}

		if (extend) {
			signature += ` extends ${extend}`;
		}

		if (implement.length) {
			signature += ` implements ${implement.join(', ')}`;
		}

		signature += `{`;
		signature += `\n${publicProperties.join('\n')}\n`;
		signature += `\n${publicMethods.join('\n')}\n`;
		signature += '}';
		return signature;
	};

	const appendClassMembersInfo = (classDeclaration: ClassDeclaration) => {
		const info = getInformationWithPropertyInfo(classDeclaration);
		const methods = getPublicMethods(classDeclaration);

		for (const method of methods) {
			const methodName = method.getName();
			info.push([
				'method',
				{
					__kind: 'info',
					header: methodName,
					info: {
						file: fileWithLineNumbers(method),
						info: getInformationWithParemetersInfo(method),
						signature: getSignature(method)
							.replace(/\r\n/g, '\n')
							.replace(/\n/g, '')
							.replace(/  /g, ' '),
					},
				},
			]);
		}

		return info;
	};

	return [
		{
			file: fileWithLineNumbers(declaration),
			info: appendClassMembersInfo(declaration),
			signature: format(createSignature()),
		},
	];
}

function getSignature(declaration: FunctionDeclaration | MethodDeclaration) {
	const bt = declaration.getBodyText();
	const signature = declaration.removeBody().getText();
	if (bt) {
		declaration.setBodyText(bt);
	}
	return removeComments(signature).trim();
}

function getInformation(docs: JSDoc[]): Output['overloads'][0]['info'] {
	if (!docs.length) {
		return [];
	}

	const infos = docs.map((doc) => {
		let tagIndex = -1;
		const information: Output['overloads'][0]['info'] = [];

		// manually parse the jsDoc tags
		// ts-morph doesn't handle multi line tag text?
		const text = doc.getText();
		const lines = text
			.replace(/\r\n/g, '\n')
			.split('\n')
			// remove the first line: /**
			.filter((_, i) => i > 0)
			// remove the leading astrerix (*)
			.map((l) => l.trim().substr(2).trimLeft());

		for (const line of lines) {
			// we hit a tag, create a new entry
			if (line.startsWith('@')) {
				let [tagName, ...lineText] = line.substr(1).split(' ');
				if (!lineText.join().trim()) continue;

				if (tagName === 'param') {
					const [param, ...description] = lineText;
					information[++tagIndex] = [
						tagName,
						{
							__kind: 'table',
							label: param,
							description: (description || []).join(' ').trim(),
							type: '',
						},
					];
				} else {
					information[++tagIndex] = [
						tagName,
						{
							__kind: 'heading',
							description: lineText.join(' ').trim(),
						},
					];
				}
			} else if (information[tagIndex]) {
				// append text to the current tag
				const current = information[tagIndex];
				if (current[1].__kind === 'heading') {
					current[1].description += '\n' + line.trim();
				} else {
					// TODO: what to do here?
				}
			} else {
				// doc without tag, or text above the first tag
				information[++tagIndex] = [
					'description',
					{
						__kind: 'heading',
						description: line.trim() || '',
					},
				];
			}
		}

		// remove empty lines at the end of a tag
		for (const tag of information) {
			while (tag[tag.length - 1] === '') {
				tag.length -= 1;
			}
		}

		return information;
	});

	return infos
		.reduce((a, b) => [...a, ...b])
		.filter(([_, value]) => value)
		.map(([label, value]) => [label, value]);
}

/**
 * Remove comments from code because these are ment to be internal
 * Also, they cause problems to format
 */
function removeComments(text: string) {
	return text
		.replace(/\r\n/g, '\n')
		.split('\n')
		.filter((p) => !p.trimLeft().startsWith('//'))
		.map((p) => {
			const comment = p.indexOf('//');
			return comment === -1 ? p : p.substr(0, comment);
		})
		.join('\n');
}

function getInformationWithParemetersInfo(
	functionDeclaration: FunctionDeclaration | MethodDeclaration,
) {
	const info = getInformation(functionDeclaration.getJsDocs());
	const params = functionDeclaration.getParameters();
	for (const param of params) {
		const paramName = param.getName();
		const type = param.getType().getText(param);
		const existingInfo = info.find(
			([tag, value]) =>
				tag === 'param' &&
				value.__kind === 'table' &&
				value.label === paramName,
		);

		if (existingInfo) {
			(existingInfo[1] as any).type = type;
		} else {
			info.push([
				'param',
				{
					__kind: 'table',
					label: paramName,
					description: '',
					type,
				},
			]);
		}
	}

	return info;
}

function getInformationWithPropertyInfo(
	declaration: InterfaceDeclaration | ClassDeclaration,
) {
	const info = getInformation(declaration.getJsDocs());
	const properties = getPublicProperties(declaration);
	for (const prop of properties) {
		const propName = prop.getName();
		const type = prop.getType().getText(prop);
		const existingInfo = info.find(
			([tag, value]) =>
				tag === 'property' &&
				value.__kind === 'table' &&
				value.label === propName,
		);

		if (existingInfo) {
			(existingInfo[1] as any).type = type;
		} else {
			info.push([
				'property',
				{
					__kind: 'table',
					label: propName,
					description: prop.getJsDocs()[0]?.getDescription().trim() || '',
					type,
				},
			]);
		}
	}

	return info;
}

function isPublic(
	node: MethodDeclaration | ClassMemberTypes | PropertyDeclaration,
) {
	return node.getScope() === 'public';
}

function getPublicMethods(classDeclaration: ClassDeclaration) {
	return classDeclaration
		.getMethods()
		.filter(isPublic)
		.map((method) => [method.getImplementation(), ...method.getOverloads()])
		.reduce((a, b) => [...a, ...b], [])
		.filter(Boolean);
}

function getPublicProperties(
	declaration: InterfaceDeclaration | ClassDeclaration,
) {
	if (declaration instanceof InterfaceDeclaration) {
		return declaration.getProperties();
	}
	return declaration.getProperties().filter(isPublic);
}

/**
 * Use prettier to format code, will throw if code isn't correct
 */
function format(
	code: string,
	parser: PrettierOptions['parser'] = 'typescript',
) {
	const prettierConfig = resolveConfig.sync(__dirname);
	try {
		return prettier(code, {
			parser,
			...prettierConfig,
		}).trim();
	} catch (err) {
		console.error('Could not format: \n\n' + code);
		return code;
	}
}

interface Output {
	module: string;
	kind: string;
	name: string;
	overloads: {
		file: string;
		signature: string;
		info: [
			string,
			(
				| { __kind: 'heading'; description: string }
				| { __kind: 'table'; label: string; description: string; type: string }
				| {
						__kind: 'info';
						header: string;
						info: Output['overloads'][0];
				  }
			),
		][];
	}[];
}

function fileWithLineNumbers(node: Node) {
	const file = node.getSourceFile();
	const filePath = relative(process.cwd(), file.getFilePath()).replace(
		/\\/g,
		'/',
	);
	return `${filePath}#L${node.getStartLineNumber()}-L${node.getEndLineNumber()}`;
}

function toFileName(s: string): string {
	return s
		.replace(/([a-z\d])([A-Z])/g, '$1_$2')
		.toLowerCase()
		.replace(/[ _]/g, '-');
}

function writeFile(
	directory: string,
	fileName: string,
	content: string,
	type: PrettierOptions['parser'],
) {
	if (!existsSync(directory)) {
		mkdirSync(directory, { recursive: true });
	}

	const contentFormatted = format(content, type) + '\n';
	writeFileSync(join(directory, fileName), contentFormatted, 'utf-8');
}

function git(args: string[]): Promise<string> {
	return cmd('git', args);
}

export function cmd(command: string, args: string[]): Promise<string> {
	return exec(command, args, (command: string) => command);
}

export function exec(command: string, args: string[], base): Promise<string> {
	return new Promise((resolve, reject) => {
		cp.exec(command + ' ' + args.join(' '), (err, stdout) => {
			if (err) {
				return reject(err);
			}

			resolve(stdout.toString());
		});
	});
}
