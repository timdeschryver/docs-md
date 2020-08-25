---
kind: ClassDeclaration
name: AstTransformer
module: compiler
---

# AstTransformer

```ts
class AstTransformer implements AstVisitor {
  visitImplicitReceiver(ast: ImplicitReceiver, context: any): AST;
  visitInterpolation(ast: Interpolation, context: any): AST;
  visitLiteralPrimitive(ast: LiteralPrimitive, context: any): AST;
  visitPropertyRead(ast: PropertyRead, context: any): AST;
  visitPropertyWrite(ast: PropertyWrite, context: any): AST;
  visitSafePropertyRead(ast: SafePropertyRead, context: any): AST;
  visitMethodCall(ast: MethodCall, context: any): AST;
  visitSafeMethodCall(ast: SafeMethodCall, context: any): AST;
  visitFunctionCall(ast: FunctionCall, context: any): AST;
  visitLiteralArray(ast: LiteralArray, context: any): AST;
  visitLiteralMap(ast: LiteralMap, context: any): AST;
  visitBinary(ast: Binary, context: any): AST;
  visitPrefixNot(ast: PrefixNot, context: any): AST;
  visitNonNullAssert(ast: NonNullAssert, context: any): AST;
  visitConditional(ast: Conditional, context: any): AST;
  visitPipe(ast: BindingPipe, context: any): AST;
  visitKeyedRead(ast: KeyedRead, context: any): AST;
  visitKeyedWrite(ast: KeyedWrite, context: any): AST;
  visitAll(asts: any[]): any[];
  visitChain(ast: Chain, context: any): AST;
  visitQuote(ast: Quote, context: any): AST;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L474-L578)

## Methods

### visitImplicitReceiver

```ts
visitImplicitReceiver(ast: ImplicitReceiver, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L475-L477)

#### Parameters (#visitImplicitReceiver-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `ImplicitReceiver` |             |
| context | `any`              |             |

### visitInterpolation

```ts
visitInterpolation(ast: Interpolation, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L479-L481)

#### Parameters (#visitInterpolation-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `Interpolation` |             |
| context | `any`           |             |

### visitLiteralPrimitive

```ts
visitLiteralPrimitive(ast: LiteralPrimitive, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L483-L485)

#### Parameters (#visitLiteralPrimitive-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `LiteralPrimitive` |             |
| context | `any`              |             |

### visitPropertyRead

```ts
visitPropertyRead(ast: PropertyRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L487-L490)

#### Parameters (#visitPropertyRead-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `PropertyRead` |             |
| context | `any`          |             |

### visitPropertyWrite

```ts
visitPropertyWrite(ast: PropertyWrite, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L492-L496)

#### Parameters (#visitPropertyWrite-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `PropertyWrite` |             |
| context | `any`           |             |

### visitSafePropertyRead

```ts
visitSafePropertyRead(ast: SafePropertyRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L498-L501)

#### Parameters (#visitSafePropertyRead-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `SafePropertyRead` |             |
| context | `any`              |             |

### visitMethodCall

```ts
visitMethodCall(ast: MethodCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L503-L507)

#### Parameters (#visitMethodCall-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `MethodCall` |             |
| context | `any`        |             |

### visitSafeMethodCall

```ts
visitSafeMethodCall(ast: SafeMethodCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L509-L513)

#### Parameters (#visitSafeMethodCall-parameters)

| Name    | Type             | Description |
| ------- | ---------------- | ----------- |
| ast     | `SafeMethodCall` |             |
| context | `any`            |             |

### visitFunctionCall

```ts
visitFunctionCall(ast: FunctionCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L515-L518)

#### Parameters (#visitFunctionCall-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `FunctionCall` |             |
| context | `any`          |             |

### visitLiteralArray

```ts
visitLiteralArray(ast: LiteralArray, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L520-L522)

#### Parameters (#visitLiteralArray-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `LiteralArray` |             |
| context | `any`          |             |

### visitLiteralMap

```ts
visitLiteralMap(ast: LiteralMap, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L524-L526)

#### Parameters (#visitLiteralMap-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `LiteralMap` |             |
| context | `any`        |             |

### visitBinary

```ts
visitBinary(ast: Binary, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L528-L531)

#### Parameters (#visitBinary-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| ast     | `Binary` |             |
| context | `any`    |             |

### visitPrefixNot

```ts
visitPrefixNot(ast: PrefixNot, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L533-L535)

#### Parameters (#visitPrefixNot-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `PrefixNot` |             |
| context | `any`       |             |

### visitNonNullAssert

```ts
visitNonNullAssert(ast: NonNullAssert, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L537-L539)

#### Parameters (#visitNonNullAssert-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `NonNullAssert` |             |
| context | `any`           |             |

### visitConditional

```ts
visitConditional(ast: Conditional, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L541-L545)

#### Parameters (#visitConditional-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `Conditional` |             |
| context | `any`         |             |

### visitPipe

```ts
visitPipe(ast: BindingPipe, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L547-L551)

#### Parameters (#visitPipe-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `BindingPipe` |             |
| context | `any`         |             |

### visitKeyedRead

```ts
visitKeyedRead(ast: KeyedRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L553-L555)

#### Parameters (#visitKeyedRead-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `KeyedRead` |             |
| context | `any`       |             |

### visitKeyedWrite

```ts
visitKeyedWrite(ast: KeyedWrite, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L557-L560)

#### Parameters (#visitKeyedWrite-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `KeyedWrite` |             |
| context | `any`        |             |

### visitAll

```ts
visitAll(asts: any[]): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L562-L568)

#### Parameters (#visitAll-parameters)

| Name | Type    | Description |
| ---- | ------- | ----------- |
| asts | `any[]` |             |

### visitChain

```ts
visitChain(ast: Chain, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L570-L572)

#### Parameters (#visitChain-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Chain` |             |
| context | `any`   |             |

### visitQuote

```ts
visitQuote(ast: Quote, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L574-L577)

#### Parameters (#visitQuote-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Quote` |             |
| context | `any`   |             |
