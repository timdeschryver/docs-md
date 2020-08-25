---
kind: ClassDeclaration
name: Token
module: compiler
---

# Token

```ts
class Token {
  isCharacter(code: number): boolean;
  isNumber(): boolean;
  isString(): boolean;
  isOperator(operator: string): boolean;
  isIdentifier(): boolean;
  isKeyword(): boolean;
  isKeywordLet(): boolean;
  isKeywordAs(): boolean;
  isKeywordNull(): boolean;
  isKeywordUndefined(): boolean;
  isKeywordTrue(): boolean;
  isKeywordFalse(): boolean;
  isKeywordThis(): boolean;
  isError(): boolean;
  toNumber(): number;
  toString(): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L36-L116)

## Methods

### isCharacter

```ts
isCharacter(code: number): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L41-L43)

#### Parameters (#isCharacter-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| code | `number` |             |

### isNumber

```ts
isNumber(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L45-L47)

### isString

```ts
isString(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L49-L51)

### isOperator

```ts
isOperator(operator: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L53-L55)

#### Parameters (#isOperator-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| operator | `string` |             |

### isIdentifier

```ts
isIdentifier(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L57-L59)

### isKeyword

```ts
isKeyword(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L61-L63)

### isKeywordLet

```ts
isKeywordLet(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L65-L67)

### isKeywordAs

```ts
isKeywordAs(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L69-L71)

### isKeywordNull

```ts
isKeywordNull(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L73-L75)

### isKeywordUndefined

```ts
isKeywordUndefined(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L77-L79)

### isKeywordTrue

```ts
isKeywordTrue(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L81-L83)

### isKeywordFalse

```ts
isKeywordFalse(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L85-L87)

### isKeywordThis

```ts
isKeywordThis(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L89-L91)

### isError

```ts
isError(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L93-L95)

### toNumber

```ts
toNumber(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L97-L99)

### toString

```ts
toString(): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/lexer.ts#L101-L115)
