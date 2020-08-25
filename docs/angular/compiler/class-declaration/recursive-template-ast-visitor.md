---
kind: ClassDeclaration
name: RecursiveTemplateAstVisitor
module: compiler
---

# RecursiveTemplateAstVisitor

## description

Base class that can be used to build a visitor that visits each node
in an template ast recursively.

```ts
class RecursiveTemplateAstVisitor
  extends NullTemplateVisitor
  implements TemplateAstVisitor {
  visitEmbeddedTemplate(ast: EmbeddedTemplateAst, context: any): any;
  visitElement(ast: ElementAst, context: any): any;
  visitDirective(ast: DirectiveAst, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L325-L373)

## Methods

### visitEmbeddedTemplate

```ts
visitEmbeddedTemplate(ast: EmbeddedTemplateAst, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L331-L340)

#### Parameters (#visitEmbeddedTemplate-parameters)

| Name    | Type                  | Description |
| ------- | --------------------- | ----------- |
| ast     | `EmbeddedTemplateAst` |             |
| context | `any`                 |             |

### visitElement

```ts
visitElement(ast: ElementAst, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L342-L352)

#### Parameters (#visitElement-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `ElementAst` |             |
| context | `any`        |             |

### visitDirective

```ts
visitDirective(ast: DirectiveAst, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L354-L360)

#### Parameters (#visitDirective-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `DirectiveAst` |             |
| context | `any`          |             |
