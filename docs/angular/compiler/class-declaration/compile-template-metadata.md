---
kind: ClassDeclaration
name: CompileTemplateMetadata
module: compiler
---

# CompileTemplateMetadata

## description

Metadata regarding compilation of a template.

```ts
class CompileTemplateMetadata {
  encapsulation: ViewEncapsulation | null;
  template: string | null;
  templateUrl: string | null;
  htmlAst: HtmlParseTreeResult | null;
  isInline: boolean;
  styles: string[];
  styleUrls: string[];
  externalStylesheets: CompileStylesheetMetadata[];
  animations: any[];
  ngContentSelectors: string[];
  interpolation: [string, string] | null;
  preserveWhitespaces: boolean;

  toSummary(): CompileTemplateSummary;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L203-L268)

## Properties

| Name                | Type                          | Description |
| ------------------- | ----------------------------- | ----------- |
| encapsulation       | `ViewEncapsulation`           |             |
| template            | `string`                      |             |
| templateUrl         | `string`                      |             |
| htmlAst             | `HtmlParseTreeResult`         |             |
| isInline            | `boolean`                     |             |
| styles              | `string[]`                    |             |
| styleUrls           | `string[]`                    |             |
| externalStylesheets | `CompileStylesheetMetadata[]` |             |
| animations          | `any[]`                       |             |
| ngContentSelectors  | `string[]`                    |             |
| interpolation       | `[string, string]`            |             |
| preserveWhitespaces | `boolean`                     |             |

## Methods

### toSummary

```ts
toSummary(): CompileTemplateSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L260-L267)
