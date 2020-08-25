---
kind: ClassDeclaration
name: BoundDirectivePropertyAst
module: compiler
---

# BoundDirectivePropertyAst

## description

A directive property with a bound value (e.g. `\*ngIf="condition").

```ts
class BoundDirectivePropertyAst implements TemplateAst {
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L217-L224)

## Methods

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L221-L223)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
