---
kind: ClassDeclaration
name: I18NHtmlParser
module: compiler
---

# I18NHtmlParser

```ts
class I18NHtmlParser implements HtmlParser {
  getTagDefinition: any;

  parse(
    source: string,
    url: string,
    options: TokenizeOptions = {}
  ): ParseTreeResult;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/i18n_html_parser.ts#L25-L56)

## Properties

| Name             | Type  | Description |
| ---------------- | ----- | ----------- |
| getTagDefinition | `any` |             |

## Methods

### parse

```ts
parse(source: string, url: string, options: TokenizeOptions = {}): ParseTreeResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/i18n/i18n_html_parser.ts#L45-L55)

#### Parameters (#parse-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| source  | `string`          |             |
| url     | `string`          |             |
| options | `TokenizeOptions` |             |
