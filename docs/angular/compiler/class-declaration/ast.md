---
kind: ClassDeclaration
name: AST
module: compiler
---

# AST

```ts
class AST {
  visit(visitor: AstVisitor, context: any = null): any;
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L27-L40)

## Methods

### visit

```ts
visit(visitor: AstVisitor, context: any = null): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L34-L36)

#### Parameters (#visit-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| visitor | `AstVisitor` |             |
| context | `any`        |             |

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L37-L39)
