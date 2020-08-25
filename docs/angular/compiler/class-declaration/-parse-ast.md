---
kind: ClassDeclaration
name: _ParseAST
module: compiler
---

# \_ParseAST

```ts
class _ParseAST {
  index: number = 0;

  peek(offset: number): Token;
  span(start: number);
  sourceSpan(start: number): AbsoluteSourceSpan;
  advance();
  consumeOptionalCharacter(code: number): boolean;
  peekKeywordLet(): boolean;
  peekKeywordAs(): boolean;
  expectCharacter(code: number);
  consumeOptionalOperator(op: string): boolean;
  expectOperator(operator: string);
  expectIdentifierOrKeyword(): string;
  expectIdentifierOrKeywordOrString(): string;
  parseChain(): AST;
  parsePipe(): AST;
  parseExpression(): AST;
  parseConditional(): AST;
  parseLogicalOr(): AST;
  parseLogicalAnd(): AST;
  parseEquality(): AST;
  parseRelational(): AST;
  parseAdditive(): AST;
  parseMultiplicative(): AST;
  parsePrefix(): AST;
  parseCallChain(): AST;
  parsePrimary(): AST;
  parseExpressionList(terminator: number): AST[];
  parseLiteralMap(): LiteralMap;
  parseAccessMemberOrMethodCall(receiver: AST, isSafe: boolean = false): AST;
  parseCallArguments(): BindingPipe[];
  expectTemplateBindingKey(): TemplateBindingIdentifier;
  parseTemplateBindings(
    templateKey: TemplateBindingIdentifier
  ): TemplateBindingParseResult;
  error(message: string, index: number | null = null);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L281-L1031)

## Properties

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| index | `number` |             |

## Methods

### peek

```ts
peek(offset: number): Token;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L299-L302)

#### Parameters (#peek-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| offset | `number` |             |

### span

```ts
span(start: number);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L345-L347)

#### Parameters (#span-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| start | `number` |             |

### sourceSpan

```ts
sourceSpan(start: number): AbsoluteSourceSpan;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L349-L355)

#### Parameters (#sourceSpan-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| start | `number` |             |

### advance

```ts
advance();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L357-L359)

### consumeOptionalCharacter

```ts
consumeOptionalCharacter(code: number): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L361-L368)

#### Parameters (#consumeOptionalCharacter-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| code | `number` |             |

### peekKeywordLet

```ts
peekKeywordLet(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L370-L372)

### peekKeywordAs

```ts
peekKeywordAs(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L373-L375)

### expectCharacter

```ts
expectCharacter(code: number);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L377-L380)

#### Parameters (#expectCharacter-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| code | `number` |             |

### consumeOptionalOperator

```ts
consumeOptionalOperator(op: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L382-L389)

#### Parameters (#consumeOptionalOperator-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| op   | `string` |             |

### expectOperator

```ts
expectOperator(operator: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L391-L394)

#### Parameters (#expectOperator-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| operator | `string` |             |

### expectIdentifierOrKeyword

```ts
expectIdentifierOrKeyword(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L396-L404)

### expectIdentifierOrKeywordOrString

```ts
expectIdentifierOrKeywordOrString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L406-L414)

### parseChain

```ts
parseChain(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L416-L436)

### parsePipe

```ts
parsePipe(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L438-L460)

### parseExpression

```ts
parseExpression(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L462-L464)

### parseConditional

```ts
parseConditional(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L466-L485)

### parseLogicalOr

```ts
parseLogicalOr(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L487-L496)

### parseLogicalAnd

```ts
parseLogicalAnd(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L498-L507)

### parseEquality

```ts
parseEquality(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L509-L528)

### parseRelational

```ts
parseRelational(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L530-L549)

### parseAdditive

```ts
parseAdditive(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L551-L568)

### parseMultiplicative

```ts
parseMultiplicative(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L570-L588)

### parsePrefix

```ts
parsePrefix(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L590-L617)

### parseCallChain

```ts
parseCallChain(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L619-L657)

### parsePrimary

```ts
parsePrimary(): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L659-L719)

### parseExpressionList

```ts
parseExpressionList(terminator: number): AST[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L721-L729)

#### Parameters (#parseExpressionList-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| terminator | `number` |             |

### parseLiteralMap

```ts
parseLiteralMap(): LiteralMap;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L731-L749)

### parseAccessMemberOrMethodCall

```ts
parseAccessMemberOrMethodCall(receiver: AST, isSafe: boolean = false): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L751-L791)

#### Parameters (#parseAccessMemberOrMethodCall-parameters)

| Name     | Type      | Description |
| -------- | --------- | ----------- |
| receiver | `AST`     |             |
| isSafe   | `boolean` |             |

### parseCallArguments

```ts
parseCallArguments(): BindingPipe[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L793-L800)

### expectTemplateBindingKey

#### description (#expectTemplateBindingKey-description)

Parses an identifier, a keyword, a string with an optional `-` in between,
and returns the string along with its absolute source span.

```ts
expectTemplateBindingKey(): TemplateBindingIdentifier;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L806-L821)

### parseTemplateBindings

#### description (#parseTemplateBindings-description)

Parse microsyntax template expression and return a list of bindings or
parsing errors in case the given expression is invalid.

For example,

```
<div *ngFor="let item of items; index as i; trackBy: func">
```

contains five bindings:

1. ngFor -> null
2. item -> NgForOfContext.\$implicit
3. ngForOf -> items
4. i -> NgForOfContext.index
5. ngForTrackBy -> func

For a full description of the microsyntax grammar, see
https://gist.github.com/mhevery/d3530294cff2e4a1b3fe15ff75d08855

```ts
parseTemplateBindings(templateKey: TemplateBindingIdentifier): TemplateBindingParseResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L844-L879)

#### Parameters (#parseTemplateBindings-parameters)

| Name        | Type                        | Description                                          |
| ----------- | --------------------------- | ---------------------------------------------------- |
| templateKey | `TemplateBindingIdentifier` | name of the microsyntax directive, like ngIf, ngFor, |

### error

```ts
error(message: string, index: number|null = null);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/parser.ts#L993-L996)

#### Parameters (#error-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| message | `string` |             |
| index   | `number` |             |
