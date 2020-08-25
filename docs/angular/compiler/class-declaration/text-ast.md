---
kind: ClassDeclaration
name: TextAst
module: compiler
---

# TextAst

## description

A segment of text within the template.

```ts
class TextAst implements TemplateAst {
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L36-L42)

## Methods

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L39-L41)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
