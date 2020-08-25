---
kind: ClassDeclaration
name: ThrowStmt
module: compiler
---

# ThrowStmt

```ts
class ThrowStmt extends Statement {
  isEquivalent(stmt: ThrowStmt): boolean;
  visitStatement(visitor: StatementVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1151-L1161)

## Methods

### isEquivalent

```ts
isEquivalent(stmt: ThrowStmt): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1155-L1157)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `ThrowStmt` |             |

### visitStatement

```ts
visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1158-L1160)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |
