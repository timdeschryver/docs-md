---
kind: ClassDeclaration
name: LiteralArrayExpr
module: compiler
---

# LiteralArrayExpr

```ts
class LiteralArrayExpr extends Expression {
  public entries: Expression[];

  isConstant();
  isEquivalent(e: Expression): boolean;
  visitExpression(visitor: ExpressionVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L831-L848)

## Properties

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| entries | `Expression[]` |             |

## Methods

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L838-L840)

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L842-L844)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L845-L847)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |
