---
kind: ClassDeclaration
name: TemplateParser
module: compiler
---

# TemplateParser

```ts
class TemplateParser {
  parse(
    component: CompileDirectiveMetadata,
    template: string | ParseTreeResult,
    directives: CompileDirectiveSummary[],
    pipes: CompilePipeSummary[],
    schemas: SchemaMetadata[],
    templateUrl: string,
    preserveWhitespaces: boolean
  ): { template: t.TemplateAst[]; pipes: CompilePipeSummary[] };
  tryParse(
    component: CompileDirectiveMetadata,
    template: string | ParseTreeResult,
    directives: CompileDirectiveSummary[],
    pipes: CompilePipeSummary[],
    schemas: SchemaMetadata[],
    templateUrl: string,
    preserveWhitespaces: boolean
  ): TemplateParseResult;
  tryParseHtml(
    htmlAstWithErrors: ParseTreeResult,
    component: CompileDirectiveMetadata,
    directives: CompileDirectiveSummary[],
    pipes: CompilePipeSummary[],
    schemas: SchemaMetadata[]
  ): TemplateParseResult;
  expandHtml(
    htmlAstWithErrors: ParseTreeResult,
    forced: boolean = false
  ): ParseTreeResult;
  getInterpolationConfig(
    component: CompileDirectiveMetadata
  ): InterpolationConfig | undefined;
  _assertNoReferenceDuplicationOnTemplate(
    result: t.TemplateAst[],
    errors: TemplateParseError[]
  ): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L80-L214)

## Methods

### parse

```ts
parse(   component: CompileDirectiveMetadata, template: string|ParseTreeResult,   directives: CompileDirectiveSummary[], pipes: CompilePipeSummary[], schemas: SchemaMetadata[],   templateUrl: string,   preserveWhitespaces: boolean): {template: t.TemplateAst[], pipes: CompilePipeSummary[]};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L91-L112)

#### Parameters (#parse-parameters)

| Name                | Type                        | Description      |
| ------------------- | --------------------------- | ---------------- |
| component           | `CompileDirectiveMetadata`  |                  |
| template            | `string                     | ParseTreeResult` |  |
| directives          | `CompileDirectiveSummary[]` |                  |
| pipes               | `CompilePipeSummary[]`      |                  |
| schemas             | `SchemaMetadata[]`          |                  |
| templateUrl         | `string`                    |                  |
| preserveWhitespaces | `boolean`                   |                  |

### tryParse

```ts
tryParse(   component: CompileDirectiveMetadata, template: string|ParseTreeResult,   directives: CompileDirectiveSummary[], pipes: CompilePipeSummary[], schemas: SchemaMetadata[],   templateUrl: string, preserveWhitespaces: boolean): TemplateParseResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L114-L131)

#### Parameters (#tryParse-parameters)

| Name                | Type                        | Description      |
| ------------------- | --------------------------- | ---------------- |
| component           | `CompileDirectiveMetadata`  |                  |
| template            | `string                     | ParseTreeResult` |  |
| directives          | `CompileDirectiveSummary[]` |                  |
| pipes               | `CompilePipeSummary[]`      |                  |
| schemas             | `SchemaMetadata[]`          |                  |
| templateUrl         | `string`                    |                  |
| preserveWhitespaces | `boolean`                   |                  |

### tryParseHtml

```ts
tryParseHtml(   htmlAstWithErrors: ParseTreeResult, component: CompileDirectiveMetadata,   directives: CompileDirectiveSummary[], pipes: CompilePipeSummary[],   schemas: SchemaMetadata[]): TemplateParseResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L133-L175)

#### Parameters (#tryParseHtml-parameters)

| Name              | Type                        | Description |
| ----------------- | --------------------------- | ----------- |
| htmlAstWithErrors | `ParseTreeResult`           |             |
| component         | `CompileDirectiveMetadata`  |             |
| directives        | `CompileDirectiveSummary[]` |             |
| pipes             | `CompilePipeSummary[]`      |             |
| schemas           | `SchemaMetadata[]`          |             |

### expandHtml

```ts
expandHtml(htmlAstWithErrors: ParseTreeResult, forced: boolean = false): ParseTreeResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L177-L187)

#### Parameters (#expandHtml-parameters)

| Name              | Type              | Description |
| ----------------- | ----------------- | ----------- |
| htmlAstWithErrors | `ParseTreeResult` |             |
| forced            | `boolean`         |             |

### getInterpolationConfig

```ts
getInterpolationConfig(component: CompileDirectiveMetadata): InterpolationConfig|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L189-L194)

#### Parameters (#getInterpolationConfig-parameters)

| Name      | Type                       | Description |
| --------- | -------------------------- | ----------- |
| component | `CompileDirectiveMetadata` |             |

### \_assertNoReferenceDuplicationOnTemplate

```ts
_assertNoReferenceDuplicationOnTemplate(result: t.TemplateAst[], errors: TemplateParseError[]):   void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L197-L213)

#### Parameters (#\_assertNoReferenceDuplicationOnTemplate-parameters)

| Name   | Type                   | Description |
| ------ | ---------------------- | ----------- |
| result | `t.TemplateAst[]`      |             |
| errors | `TemplateParseError[]` |             |
