---
kind: FunctionDeclaration
name: templateVisitAll
module: compiler
---

# templateVisitAll

## description

Visit every node in a list of {@link TemplateAst}s with the given {@link TemplateAstVisitor}.

```ts
function templateVisitAll(
  visitor: TemplateAstVisitor,
  asts: TemplateAst[],
  context: any = null
): any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L378-L391)

## Parameters

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| asts    | `TemplateAst[]`      |             |
| context | `any`                |             |
