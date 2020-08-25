---
kind: ClassDeclaration
name: Expression
module: compiler
---

# Expression

```ts
class Expression {
  public type: Type | null;
  public sourceSpan: ParseSourceSpan | null;

  abstract visitExpression(visitor: ExpressionVisitor, context: any): any;
  abstract isEquivalent(e: Expression): boolean;
  abstract isConstant(): boolean;
  prop(name: string, sourceSpan?: ParseSourceSpan | null): ReadPropExpr;
  key(
    index: Expression,
    type?: Type | null,
    sourceSpan?: ParseSourceSpan | null
  ): ReadKeyExpr;
  callMethod(
    name: string | BuiltinMethod,
    params: Expression[],
    sourceSpan?: ParseSourceSpan | null
  ): InvokeMethodExpr;
  callFn(
    params: Expression[],
    sourceSpan?: ParseSourceSpan | null
  ): InvokeFunctionExpr;
  instantiate(
    params: Expression[],
    type?: Type | null,
    sourceSpan?: ParseSourceSpan | null
  ): InstantiateExpr;
  conditional(
    trueCase: Expression,
    falseCase: Expression | null = null,
    sourceSpan?: ParseSourceSpan | null
  ): ConditionalExpr;
  equals(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  notEquals(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  identical(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  notIdentical(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  minus(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  plus(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  divide(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  multiply(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  modulo(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  and(rhs: Expression, sourceSpan?: ParseSourceSpan | null): BinaryOperatorExpr;
  bitwiseAnd(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null,
    parens: boolean = true
  ): BinaryOperatorExpr;
  or(rhs: Expression, sourceSpan?: ParseSourceSpan | null): BinaryOperatorExpr;
  lower(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  lowerEquals(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  bigger(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  biggerEquals(
    rhs: Expression,
    sourceSpan?: ParseSourceSpan | null
  ): BinaryOperatorExpr;
  isBlank(sourceSpan?: ParseSourceSpan | null): Expression;
  cast(type: Type, sourceSpan?: ParseSourceSpan | null): Expression;
  toStmt(): Statement;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L144-L255)

## Properties

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| type       | `Type`            |             |
| sourceSpan | `ParseSourceSpan` |             |

## Methods

### visitExpression

```ts
abstract visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L153-L153)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### isEquivalent

#### description (#isEquivalent-description)

Calculates whether this expression produces the same value as the given expression.
Note: We don't check Types nor ParseSourceSpans nor function arguments.

```ts
abstract isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L159-L159)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

#### description (#isConstant-description)

Return true if the expression is constant.

```ts
abstract isConstant(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L164-L164)

### prop

```ts
prop(name: string, sourceSpan?: ParseSourceSpan|null): ReadPropExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L166-L168)

#### Parameters (#prop-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| name       | `string`          |             |
| sourceSpan | `ParseSourceSpan` |             |

### key

```ts
key(index: Expression, type?: Type|null, sourceSpan?: ParseSourceSpan|null): ReadKeyExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L170-L172)

#### Parameters (#key-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| index      | `Expression`      |             |
| type       | `Type`            |             |
| sourceSpan | `ParseSourceSpan` |             |

### callMethod

```ts
callMethod(name: string|BuiltinMethod, params: Expression[], sourceSpan?: ParseSourceSpan|null):   InvokeMethodExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L174-L177)

#### Parameters (#callMethod-parameters)

| Name       | Type              | Description    |
| ---------- | ----------------- | -------------- |
| name       | `string           | BuiltinMethod` |  |
| params     | `Expression[]`    |                |
| sourceSpan | `ParseSourceSpan` |                |

### callFn

```ts
callFn(params: Expression[], sourceSpan?: ParseSourceSpan|null): InvokeFunctionExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L179-L181)

#### Parameters (#callFn-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| params     | `Expression[]`    |             |
| sourceSpan | `ParseSourceSpan` |             |

### instantiate

```ts
instantiate(params: Expression[], type?: Type|null, sourceSpan?: ParseSourceSpan|null):   InstantiateExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L183-L186)

#### Parameters (#instantiate-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| params     | `Expression[]`    |             |
| type       | `Type`            |             |
| sourceSpan | `ParseSourceSpan` |             |

### conditional

```ts
conditional(   trueCase: Expression, falseCase: Expression|null = null,   sourceSpan?: ParseSourceSpan|null): ConditionalExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L188-L192)

#### Parameters (#conditional-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| trueCase   | `Expression`      |             |
| falseCase  | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### equals

```ts
equals(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L194-L196)

#### Parameters (#equals-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### notEquals

```ts
notEquals(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L197-L199)

#### Parameters (#notEquals-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### identical

```ts
identical(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L200-L202)

#### Parameters (#identical-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### notIdentical

```ts
notIdentical(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L203-L205)

#### Parameters (#notIdentical-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### minus

```ts
minus(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L206-L208)

#### Parameters (#minus-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### plus

```ts
plus(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L209-L211)

#### Parameters (#plus-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### divide

```ts
divide(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L212-L214)

#### Parameters (#divide-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### multiply

```ts
multiply(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L215-L217)

#### Parameters (#multiply-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### modulo

```ts
modulo(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L218-L220)

#### Parameters (#modulo-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### and

```ts
and(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L221-L223)

#### Parameters (#and-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### bitwiseAnd

```ts
bitwiseAnd(rhs: Expression, sourceSpan?: ParseSourceSpan|null, parens: boolean = true):   BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L224-L227)

#### Parameters (#bitwiseAnd-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |
| parens     | `boolean`         |             |

### or

```ts
or(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L228-L230)

#### Parameters (#or-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### lower

```ts
lower(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L231-L233)

#### Parameters (#lower-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### lowerEquals

```ts
lowerEquals(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L234-L236)

#### Parameters (#lowerEquals-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### bigger

```ts
bigger(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L237-L239)

#### Parameters (#bigger-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### biggerEquals

```ts
biggerEquals(rhs: Expression, sourceSpan?: ParseSourceSpan|null): BinaryOperatorExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L240-L242)

#### Parameters (#biggerEquals-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| rhs        | `Expression`      |             |
| sourceSpan | `ParseSourceSpan` |             |

### isBlank

```ts
isBlank(sourceSpan?: ParseSourceSpan|null): Expression;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L243-L247)

#### Parameters (#isBlank-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| sourceSpan | `ParseSourceSpan` |             |

### cast

```ts
cast(type: Type, sourceSpan?: ParseSourceSpan|null): Expression;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L248-L250)

#### Parameters (#cast-parameters)

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| type       | `Type`            |             |
| sourceSpan | `ParseSourceSpan` |             |

### toStmt

```ts
toStmt(): Statement;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L252-L254)
