---
kind: ClassDeclaration
name: TryCatchStmt
module: compiler
---

# TryCatchStmt

```ts
class TryCatchStmt extends Statement {
  isEquivalent(stmt: Statement): boolean;
  visitStatement(visitor: StatementVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1135-L1148)

## Methods

### isEquivalent

```ts
isEquivalent(stmt: Statement): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1141-L1144)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `Statement` |             |

### visitStatement

```ts
visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1145-L1147)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |
