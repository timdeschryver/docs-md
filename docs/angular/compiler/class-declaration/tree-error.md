---
kind: ClassDeclaration
name: TreeError
module: compiler
---

# TreeError

```ts
class TreeError extends ParseError {
  static create(
    elementName: string | null,
    span: ParseSourceSpan,
    msg: string
  ): TreeError;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/parser.ts#L15-L23)

## Methods

### create

```ts
static create(elementName: string|null, span: ParseSourceSpan, msg: string): TreeError;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/parser.ts#L16-L18)

#### Parameters (#create-parameters)

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| elementName | `string`          |             |
| span        | `ParseSourceSpan` |             |
| msg         | `string`          |             |
