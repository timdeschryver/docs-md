---
kind: InterfaceDeclaration
name: TemplateAst
module: compiler
---

# TemplateAst

## description

An Abstract Syntax Tree node representing part of a parsed Angular template.

```ts
interface TemplateAst {
  sourceSpan: ParseSourceSpan;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L21-L31)

## Properties

| Name       | Type              | Description                                      |
| ---------- | ----------------- | ------------------------------------------------ |
| sourceSpan | `ParseSourceSpan` | The source span from which this node was parsed. |
