---
kind: ClassDeclaration
name: FunctionExpr
module: compiler
---

# FunctionExpr

```ts
class FunctionExpr extends Expression {
  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
  toDeclStmt(
    name: string,
    modifiers: StmtModifier[] | null = null
  ): DeclareFunctionStmt;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L728-L752)

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L735-L738)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L740-L742)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L744-L746)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### toDeclStmt

```ts
toDeclStmt(name: string, modifiers: StmtModifier[]|null = null): DeclareFunctionStmt;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L748-L751)

#### Parameters (#toDeclStmt-parameters)

| Name      | Type             | Description |
| --------- | ---------------- | ----------- |
| name      | `string`         |             |
| modifiers | `StmtModifier[]` |             |
