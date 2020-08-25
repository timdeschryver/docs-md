---
kind: ClassDeclaration
name: XmlParser
module: compiler
---

# XmlParser

```ts
class XmlParser extends Parser {
  parse(
    source: string,
    url: string,
    options?: TokenizeOptions
  ): ParseTreeResult;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/xml_parser.ts#L15-L23)

## Methods

### parse

```ts
parse(source: string, url: string, options?: TokenizeOptions): ParseTreeResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/xml_parser.ts#L20-L22)

#### Parameters (#parse-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| source  | `string`          |             |
| url     | `string`          |             |
| options | `TokenizeOptions` |             |
