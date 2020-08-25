---
kind: ClassDeclaration
name: ElementAst
module: compiler
---

# ElementAst

## description

An element declaration in a template.

```ts
class ElementAst implements TemplateAst {
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L184-L196)

## Methods

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L193-L195)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
