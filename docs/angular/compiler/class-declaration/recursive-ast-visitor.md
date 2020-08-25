---
kind: ClassDeclaration
name: RecursiveAstVisitor
module: compiler
---

# RecursiveAstVisitor

```ts
class RecursiveAstVisitor implements AstVisitor {
  visit(ast: AST, context?: any): any;
  visitBinary(ast: Binary, context: any): any;
  visitChain(ast: Chain, context: any): any;
  visitConditional(ast: Conditional, context: any): any;
  visitPipe(ast: BindingPipe, context: any): any;
  visitFunctionCall(ast: FunctionCall, context: any): any;
  visitInterpolation(ast: Interpolation, context: any): any;
  visitKeyedRead(ast: KeyedRead, context: any): any;
  visitKeyedWrite(ast: KeyedWrite, context: any): any;
  visitLiteralArray(ast: LiteralArray, context: any): any;
  visitLiteralMap(ast: LiteralMap, context: any): any;
  visitMethodCall(ast: MethodCall, context: any): any;
  visitPrefixNot(ast: PrefixNot, context: any): any;
  visitNonNullAssert(ast: NonNullAssert, context: any): any;
  visitPropertyRead(ast: PropertyRead, context: any): any;
  visitPropertyWrite(ast: PropertyWrite, context: any): any;
  visitSafePropertyRead(ast: SafePropertyRead, context: any): any;
  visitSafeMethodCall(ast: SafeMethodCall, context: any): any;
  visitAll(asts: AST[], context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L392-L472)

## Methods

### visit

```ts
visit(ast: AST, context?: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L393-L398)

#### Parameters (#visit-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| ast     | `AST` |             |
| context | `any` |             |

### visitBinary

```ts
visitBinary(ast: Binary, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L399-L402)

#### Parameters (#visitBinary-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| ast     | `Binary` |             |
| context | `any`    |             |

### visitChain

```ts
visitChain(ast: Chain, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L403-L405)

#### Parameters (#visitChain-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Chain` |             |
| context | `any`   |             |

### visitConditional

```ts
visitConditional(ast: Conditional, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L406-L410)

#### Parameters (#visitConditional-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `Conditional` |             |
| context | `any`         |             |

### visitPipe

```ts
visitPipe(ast: BindingPipe, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L411-L414)

#### Parameters (#visitPipe-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `BindingPipe` |             |
| context | `any`         |             |

### visitFunctionCall

```ts
visitFunctionCall(ast: FunctionCall, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L415-L420)

#### Parameters (#visitFunctionCall-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `FunctionCall` |             |
| context | `any`          |             |

### visitImplicitReceiver

```ts
visitImplicitReceiver(ast: ImplicitReceiver, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L421-L421)

#### Parameters (#visitImplicitReceiver-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `ImplicitReceiver` |             |
| context | `any`              |             |

### visitInterpolation

```ts
visitInterpolation(ast: Interpolation, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L422-L424)

#### Parameters (#visitInterpolation-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `Interpolation` |             |
| context | `any`           |             |

### visitKeyedRead

```ts
visitKeyedRead(ast: KeyedRead, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L425-L428)

#### Parameters (#visitKeyedRead-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `KeyedRead` |             |
| context | `any`       |             |

### visitKeyedWrite

```ts
visitKeyedWrite(ast: KeyedWrite, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L429-L433)

#### Parameters (#visitKeyedWrite-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `KeyedWrite` |             |
| context | `any`        |             |

### visitLiteralArray

```ts
visitLiteralArray(ast: LiteralArray, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L434-L436)

#### Parameters (#visitLiteralArray-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `LiteralArray` |             |
| context | `any`          |             |

### visitLiteralMap

```ts
visitLiteralMap(ast: LiteralMap, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L437-L439)

#### Parameters (#visitLiteralMap-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `LiteralMap` |             |
| context | `any`        |             |

### visitLiteralPrimitive

```ts
visitLiteralPrimitive(ast: LiteralPrimitive, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L440-L440)

#### Parameters (#visitLiteralPrimitive-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `LiteralPrimitive` |             |
| context | `any`              |             |

### visitMethodCall

```ts
visitMethodCall(ast: MethodCall, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L441-L444)

#### Parameters (#visitMethodCall-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `MethodCall` |             |
| context | `any`        |             |

### visitPrefixNot

```ts
visitPrefixNot(ast: PrefixNot, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L445-L447)

#### Parameters (#visitPrefixNot-parameters)

| Name    | Type        | Description |
| ------- | ----------- | ----------- |
| ast     | `PrefixNot` |             |
| context | `any`       |             |

### visitNonNullAssert

```ts
visitNonNullAssert(ast: NonNullAssert, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L448-L450)

#### Parameters (#visitNonNullAssert-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `NonNullAssert` |             |
| context | `any`           |             |

### visitPropertyRead

```ts
visitPropertyRead(ast: PropertyRead, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L451-L453)

#### Parameters (#visitPropertyRead-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `PropertyRead` |             |
| context | `any`          |             |

### visitPropertyWrite

```ts
visitPropertyWrite(ast: PropertyWrite, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L454-L457)

#### Parameters (#visitPropertyWrite-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `PropertyWrite` |             |
| context | `any`           |             |

### visitSafePropertyRead

```ts
visitSafePropertyRead(ast: SafePropertyRead, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L458-L460)

#### Parameters (#visitSafePropertyRead-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| ast     | `SafePropertyRead` |             |
| context | `any`              |             |

### visitSafeMethodCall

```ts
visitSafeMethodCall(ast: SafeMethodCall, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L461-L464)

#### Parameters (#visitSafeMethodCall-parameters)

| Name    | Type             | Description |
| ------- | ---------------- | ----------- |
| ast     | `SafeMethodCall` |             |
| context | `any`            |             |

### visitQuote

```ts
visitQuote(ast: Quote, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L465-L465)

#### Parameters (#visitQuote-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| ast     | `Quote` |             |
| context | `any`   |             |

### visitAll

```ts
visitAll(asts: AST[], context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L467-L471)

#### Parameters (#visitAll-parameters)

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| asts    | `AST[]` |             |
| context | `any`   |             |
