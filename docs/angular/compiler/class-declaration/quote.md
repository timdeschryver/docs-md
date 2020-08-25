---
kind: ClassDeclaration
name: Quote
module: compiler
---

# Quote

## description

Represents a quoted expression of the form:

quote = prefix `:` uninterpretedExpression
prefix = identifier
uninterpretedExpression = arbitrary string

A quoted expression is meant to be pre-processed by an AST transformer that
converts it into another AST that no longer contains quoted expressions.
It is meant to allow third-party developers to extend Angular template
expression language. The `uninterpretedExpression` part of the quote is
therefore not interpreted by the Angular's own expression parser.

```ts
class Quote extends AST {
  visit(visitor: AstVisitor, context: any = null): any;
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L62-L74)

## Methods

### visit

```ts
visit(visitor: AstVisitor, context: any = null): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L68-L70)

#### Parameters (#visit-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| visitor | `AstVisitor` |             |
| context | `any`        |             |

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/expression_parser/ast.ts#L71-L73)
