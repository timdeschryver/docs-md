---
kind: InterfaceDeclaration
name: TemplateSource
module: language-service
---

# TemplateSource

## description

The information `LanguageService` needs from the `LanguageServiceHost` to describe the content of
a template and the language context the template is in.

A host interface; see `LanguageServiceHost`.

```ts
interface TemplateSource {
  readonly source: string;
  readonly span: Span;
  readonly type: StaticSymbol;
  readonly members: SymbolTable;
  readonly query: SymbolQuery;
  readonly fileName: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/types.ts#L25-L55)

## publicApi

## Properties

| Name     | Type          | Description                                                             |
| -------- | ------------- | ----------------------------------------------------------------------- |
| source   | `string`      | The source of the template.                                             |
| span     | `Span`        | The span of the template within the source file.                        |
| type     | `any`         | A static symbol for the template's component.                           |
| members  | `SymbolTable` | The `SymbolTable` for the members of the component.                     |
| query    | `SymbolQuery` | A `SymbolQuery` for the context of the template.                        |
| fileName | `string`      | Name of the file that contains the template. Could be `.html` or `.ts`. |
