---
kind: ClassDeclaration
name: IfStmt
module: compiler
---

# IfStmt

```ts
class IfStmt extends Statement {
  isEquivalent(stmt: Statement): boolean;
  visitStatement(visitor: StatementVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1092-L1106)

## Methods

### isEquivalent

```ts
isEquivalent(stmt: Statement): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1098-L1102)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `Statement` |             |

### visitStatement

```ts
visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1103-L1105)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |
