#!/usr/bin/env node

const { normalize } = require('path');
const sade = require('sade');
const ora = require('ora');

sade('docs-md <barrelsGlob>', true)
	.version('0.0.1')
	.describe('Generates documentation in markdown for your project')
	.example('docs-md "./src/index.ts"')
	.example('docs-md "./src/project1/index.ts,./src/project2/index.ts"')
	.example('docs-md "./src/**/index.ts"')
	.option('-o, --output', 'Api docs directory (comma seperated)', './docs/api')
	.action(async (barrelsGlob, opts) => {
		const spinner = ora({
			color: 'yellow',
			text: 'Generating API docs',
		}).start();
		await require('./dist')
			.generateApi(normalize(barrelsGlob), normalize(opts.output))
			.finally(() => spinner.stop());
	})
	.parse(process.argv);
