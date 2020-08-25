---
kind: ClassDeclaration
name: ExpressionStatement
module: compiler
---

# ExpressionStatement

```ts
class ExpressionStatement extends Statement {
  isEquivalent(stmt: Statement): boolean;
  visitStatement(visitor: StatementVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L995-L1006)

## Methods

### isEquivalent

```ts
isEquivalent(stmt: Statement): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L999-L1001)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `Statement` |             |

### visitStatement

```ts
visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1003-L1005)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |
