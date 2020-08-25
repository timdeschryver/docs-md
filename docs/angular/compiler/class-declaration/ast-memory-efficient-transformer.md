---
kind: ClassDeclaration
name: AstMemoryEfficientTransformer
module: compiler
---

# AstMemoryEfficientTransformer

```ts
class AstMemoryEfficientTransformer implements AstVisitor {
  visitImplicitReceiver(ast: ImplicitReceiver, context: any): AST;
  visitInterpolation(ast: Interpolation, context: any): Interpolation;
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L582-L752)

## Methods

### visitImplicitReceiver

```ts
visitImplicitReceiver(ast: ImplicitReceiver, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L583-L585)

#### Parameters (#visitImplicitReceiver-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `ImplicitReceiver` |             |
| context | `any`              |             |

### visitInterpolation

```ts
visitInterpolation(ast: Interpolation, context: any): Interpolation;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L587-L592)

#### Parameters (#visitInterpolation-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `Interpolation` |             |
| context | `any`           |             |

### visitLiteralPrimitive

```ts
visitLiteralPrimitive(ast: LiteralPrimitive, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L594-L596)

#### Parameters (#visitLiteralPrimitive-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `LiteralPrimitive` |             |
| context | `any`              |             |

### visitPropertyRead

```ts
visitPropertyRead(ast: PropertyRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L598-L604)

#### Parameters (#visitPropertyRead-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `PropertyRead` |             |
| context | `any`          |             |

### visitPropertyWrite

```ts
visitPropertyWrite(ast: PropertyWrite, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L606-L613)

#### Parameters (#visitPropertyWrite-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `PropertyWrite` |             |
| context | `any`           |             |

### visitSafePropertyRead

```ts
visitSafePropertyRead(ast: SafePropertyRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L615-L621)

#### Parameters (#visitSafePropertyRead-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `SafePropertyRead` |             |
| context | `any`              |             |

### visitMethodCall

```ts
visitMethodCall(ast: MethodCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L623-L630)

#### Parameters (#visitMethodCall-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `MethodCall` |             |
| context | `any`        |             |

### visitSafeMethodCall

```ts
visitSafeMethodCall(ast: SafeMethodCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L632-L639)

#### Parameters (#visitSafeMethodCall-parameters)

| Name    | Type             | Description |
| ------- | ---------------- | ----------- |
| ast     | `SafeMethodCall` |             |
| context | `any`            |             |

### visitFunctionCall

```ts
visitFunctionCall(ast: FunctionCall, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L641-L648)

#### Parameters (#visitFunctionCall-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `FunctionCall` |             |
| context | `any`          |             |

### visitLiteralArray

```ts
visitLiteralArray(ast: LiteralArray, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L650-L656)

#### Parameters (#visitLiteralArray-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `LiteralArray` |             |
| context | `any`          |             |

### visitLiteralMap

```ts
visitLiteralMap(ast: LiteralMap, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L658-L664)

#### Parameters (#visitLiteralMap-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `LiteralMap` |             |
| context | `any`        |             |

### visitBinary

```ts
visitBinary(ast: Binary, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L666-L673)

#### Parameters (#visitBinary-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| ast     | `Binary` |             |
| context | `any`    |             |

### visitPrefixNot

```ts
visitPrefixNot(ast: PrefixNot, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L675-L681)

#### Parameters (#visitPrefixNot-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `PrefixNot` |             |
| context | `any`       |             |

### visitNonNullAssert

```ts
visitNonNullAssert(ast: NonNullAssert, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L683-L689)

#### Parameters (#visitNonNullAssert-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `NonNullAssert` |             |
| context | `any`           |             |

### visitConditional

```ts
visitConditional(ast: Conditional, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L691-L699)

#### Parameters (#visitConditional-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `Conditional` |             |
| context | `any`         |             |

### visitPipe

```ts
visitPipe(ast: BindingPipe, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L701-L708)

#### Parameters (#visitPipe-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `BindingPipe` |             |
| context | `any`         |             |

### visitKeyedRead

```ts
visitKeyedRead(ast: KeyedRead, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L710-L717)

#### Parameters (#visitKeyedRead-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `KeyedRead` |             |
| context | `any`       |             |

### visitKeyedWrite

```ts
visitKeyedWrite(ast: KeyedWrite, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L719-L727)

#### Parameters (#visitKeyedWrite-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `KeyedWrite` |             |
| context | `any`        |             |

### visitAll

```ts
visitAll(asts: any[]): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L729-L739)

#### Parameters (#visitAll-parameters)

| Name | Type    | Description |
| ---- | ------- | ----------- |
| asts | `any[]` |             |

### visitChain

```ts
visitChain(ast: Chain, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L741-L747)

#### Parameters (#visitChain-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Chain` |             |
| context | `any`   |             |

### visitQuote

```ts
visitQuote(ast: Quote, context: any): AST;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L749-L751)

#### Parameters (#visitQuote-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Quote` |             |
| context | `any`   |             |
