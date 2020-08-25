---
kind: ClassDeclaration
name: ReturnStatement
module: compiler
---

# ReturnStatement

```ts
class ReturnStatement extends Statement {
  isEquivalent(stmt: Statement): boolean;
  visitStatement(visitor: StatementVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1009-L1019)

## Methods

### isEquivalent

```ts
isEquivalent(stmt: Statement): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1013-L1015)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `Statement` |             |

### visitStatement

```ts
visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1016-L1018)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |
