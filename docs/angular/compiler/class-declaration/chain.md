---
kind: ClassDeclaration
name: Chain
module: compiler
---

# Chain

## description

Multiple expressions separated by a semicolon.

```ts
class Chain extends AST {
  visit(visitor: AstVisitor, context: any = null): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L89-L96)

## Methods

### visit

```ts
visit(visitor: AstVisitor, context: any = null): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L93-L95)

#### Parameters (#visit-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| visitor | `AstVisitor` |             |
| context | `any`        |             |
