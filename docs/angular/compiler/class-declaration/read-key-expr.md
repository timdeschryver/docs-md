---
kind: ClassDeclaration
name: ReadKeyExpr
module: compiler
---

# ReadKeyExpr

```ts
class ReadKeyExpr extends Expression {
  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
  set(value: Expression): WriteKeyExpr;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L805-L828)

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L812-L815)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L817-L819)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L821-L823)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### set

```ts
set(value: Expression): WriteKeyExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L825-L827)

#### Parameters (#set-parameters)

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `Expression` |             |
