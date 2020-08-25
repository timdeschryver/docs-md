---
kind: ClassDeclaration
name: TypeScriptServiceHost
module: language-service
---

# TypeScriptServiceHost

## description

An implementation of a `LanguageServiceHost` for a TypeScript project.

The `TypeScriptServiceHost` implements the Angular `LanguageServiceHost` using
the TypeScript language services.

```ts
class TypeScriptServiceHost implements LanguageServiceHost {
  getExternalTemplates(): string[];
  getAnalyzedModules(): NgAnalyzedModules;
  getTemplates(fileName: string): TemplateSource[];
  getDeclarations(fileName: string): Declaration[];
  getSourceFile(fileName: string): tss.SourceFile | undefined;
  getTemplateAstAtPosition(
    fileName: string,
    position: number
  ): AstResult | undefined;
  getTemplateAst(template: TemplateSource): AstResult | undefined;
  log(msg: string);
  error(msg: string);
  debug(msg: string);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L58-L597)

## publicApi

## Methods

### getExternalTemplates

#### description (#getExternalTemplates-description)

Return all known external templates.

```ts
getExternalTemplates(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L157-L159)

### getAnalyzedModules

#### description (#getAnalyzedModules-description)

Checks whether the program has changed and returns all analyzed modules.
If program has changed, invalidate all caches and update fileToComponent
and templateReferences.
In addition to returning information about NgModules, this method plays the
same role as 'synchronizeHostData' in tsserver.

```ts
getAnalyzedModules(): NgAnalyzedModules;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L168-L209)

### getTemplates

#### description (#getTemplates-description)

Find all templates in the specified `file`.

```ts
getTemplates(fileName: string): TemplateSource[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L281-L304)

#### Parameters (#getTemplates-parameters)

| Name     | Type     | Description     |
| -------- | -------- | --------------- |
| fileName | `string` | TS or HTML file |

### getDeclarations

#### description (#getDeclarations-description)

Return metadata about all class declarations in the file that are Angular
directives. Potential matches are `@NgModule`, `@Component`, `@Directive`,
`@Pipes`, etc. class declarations.

```ts
getDeclarations(fileName: string): Declaration[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L313-L350)

#### Parameters (#getDeclarations-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` | TS file     |

### getSourceFile

```ts
getSourceFile(fileName: string): tss.SourceFile|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L352-L357)

#### Parameters (#getSourceFile-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| fileName | `string` |             |

### getTemplateAstAtPosition

#### description (#getTemplateAstAtPosition-description)

Return the parsed template for the template at the specified `position`.

```ts
getTemplateAstAtPosition(fileName: string, position: number): AstResult|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L465-L485)

#### Parameters (#getTemplateAstAtPosition-parameters)

| Name     | Type     | Description                                                 |
| -------- | -------- | ----------------------------------------------------------- |
| fileName | `string` | TS or HTML file                                             |
| position | `number` | Position of the template in the TS file, otherwise ignored. |

### getTemplateAst

#### description (#getTemplateAst-description)

Parse the `template` and return its AST, if any.

```ts
getTemplateAst(template: TemplateSource): AstResult|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L524-L557)

#### Parameters (#getTemplateAst-parameters)

| Name     | Type             | Description           |
| -------- | ---------------- | --------------------- |
| template | `TemplateSource` | template to be parsed |

### log

#### description (#log-description)

Log the specified `msg` to file at INFO level. If logging is not enabled
this method is a no-op.

```ts
log(msg: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L564-L568)

#### Parameters (#log-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| msg  | `string` | Log message |

### error

#### description (#error-description)

Log the specified `msg` to file at ERROR level. If logging is not enabled
this method is a no-op.

```ts
error(msg: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L575-L579)

#### Parameters (#error-parameters)

| Name | Type     | Description   |
| ---- | -------- | ------------- |
| msg  | `string` | error message |

### debug

#### description (#debug-description)

Log debugging info to file at INFO level, only if verbose setting is turned
on. Otherwise, this method is a no-op.

```ts
debug(msg: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/typescript_host.ts#L586-L596)

#### Parameters (#debug-parameters)

| Name | Type     | Description       |
| ---- | -------- | ----------------- |
| msg  | `string` | debugging message |
