---
kind: ClassDeclaration
name: ReadVarExpr
module: compiler
---

# ReadVarExpr

```ts
class ReadVarExpr extends Expression {
  public name: string | null;
  public builtin: BuiltinVar | null;

  isEquivalent(e: Expression): boolean;
  isConstant();
  visitExpression(visitor: ExpressionVisitor, context: any): any;
  set(value: Expression): WriteVarExpr;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L264-L297)

## Properties

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| name    | `string`     |             |
| builtin | `BuiltinVar` |             |

## Methods

### isEquivalent

```ts
isEquivalent(e: Expression): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L279-L281)

#### Parameters (#isEquivalent-parameters)

| Name | Type         | Description |
| ---- | ------------ | ----------- |
| e    | `Expression` |             |

### isConstant

```ts
isConstant();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L283-L285)

### visitExpression

```ts
visitExpression(visitor: ExpressionVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L287-L289)

#### Parameters (#visitExpression-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| visitor | `ExpressionVisitor` |             |
| context | `any`               |             |

### set

```ts
set(value: Expression): WriteVarExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L291-L296)

#### Parameters (#set-parameters)

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `Expression` |             |
