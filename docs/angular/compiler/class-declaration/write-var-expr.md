---
kind: ClassDeclaration
name: WriteVarExpr
module: compiler
---

# WriteVarExpr

```ts
class WriteVarExpr extends Expression {
  public value: Expression;

  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
  toDeclStmt(
    type?: Type | null,
    modifiers?: StmtModifier[] | null
  ): DeclareVarStmt;
  toConstDecl(): DeclareVarStmt;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L335-L362)

## Properties

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `Expression` |             |

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L343-L345)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L347-L349)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L351-L353)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### toDeclStmt

```ts
toDeclStmt(type?: Type|null, modifiers?: StmtModifier[]|null): DeclareVarStmt;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L355-L357)

#### Parameters (#toDeclStmt-parameters)

| Name      | Type             | Description |
| --------- | ---------------- | ----------- |
| type      | `Type`           |             |
| modifiers | `StmtModifier[]` |             |

### toConstDecl

```ts
toConstDecl(): DeclareVarStmt;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L359-L361)
