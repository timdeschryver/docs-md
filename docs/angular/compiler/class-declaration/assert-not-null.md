---
kind: ClassDeclaration
name: AssertNotNull
module: compiler
---

# AssertNotNull

```ts
class AssertNotNull extends Expression {
  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L682-L698)

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L687-L689)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L691-L693)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L695-L697)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |
