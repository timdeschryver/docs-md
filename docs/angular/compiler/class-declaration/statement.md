---
kind: ClassDeclaration
name: Statement
module: compiler
---

# Statement

```ts
class Statement {
  public modifiers: StmtModifier[];
  public sourceSpan: ParseSourceSpan | null;

  abstract isEquivalent(stmt: Statement): boolean;
  abstract visitStatement(visitor: StatementVisitor, context: any): any;
  hasModifier(modifier: StmtModifier): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L939-L957)

## Properties

| Name       | Type              | Description |
| ---------- | ----------------- | ----------- |
| modifiers  | `StmtModifier[]`  |             |
| sourceSpan | `ParseSourceSpan` |             |

## Methods

### isEquivalent

#### description (#isEquivalent-description)

Calculates whether this statement produces the same value as the given statement.
Note: We don't check Types nor ParseSourceSpans nor function arguments.

```ts
abstract isEquivalent(stmt: Statement): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L950-L950)

#### Parameters (#isEquivalent-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| stmt | `Statement` |             |

### visitStatement

```ts
abstract visitStatement(visitor: StatementVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L952-L952)

#### Parameters (#visitStatement-parameters)

| Name    | Type               | Description |
| ------- | ------------------ | ----------- |
| visitor | `StatementVisitor` |             |
| context | `any`              |             |

### hasModifier

```ts
hasModifier(modifier: StmtModifier): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L954-L956)

#### Parameters (#hasModifier-parameters)

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| modifier | `StmtModifier` |             |
