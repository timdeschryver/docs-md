---
kind: ClassDeclaration
name: ReadPropExpr
module: compiler
---

# ReadPropExpr

```ts
class ReadPropExpr extends Expression {
  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
  set(value: Expression): WritePropExpr;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L779-L802)

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L786-L789)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L791-L793)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L795-L797)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### set

```ts
set(value: Expression): WritePropExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L799-L801)

#### Parameters (#set-parameters)

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `Expression` |             |
