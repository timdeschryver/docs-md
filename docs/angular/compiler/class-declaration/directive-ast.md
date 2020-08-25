---
kind: ClassDeclaration
name: DirectiveAst
module: compiler
---

# DirectiveAst

## description

A directive declared on an element.

```ts
class DirectiveAst implements TemplateAst {
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L229-L237)

## Methods

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L234-L236)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
