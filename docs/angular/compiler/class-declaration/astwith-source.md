---
kind: ClassDeclaration
name: ASTWithSource
module: compiler
---

# ASTWithSource

```ts
class ASTWithSource extends AST {
  visit(visitor: AstVisitor, context: any = null): any;
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L287-L305)

## Methods

### visit

```ts
visit(visitor: AstVisitor, context: any = null): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L296-L301)

#### Parameters (#visit-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| visitor | `AstVisitor` |             |
| context | `any`        |             |

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L302-L304)
