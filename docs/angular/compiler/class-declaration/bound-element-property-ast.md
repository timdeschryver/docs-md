---
kind: ClassDeclaration
name: BoundElementPropertyAst
module: compiler
---

# BoundElementPropertyAst

## description

A binding for an element property (e.g. `[property]="expression"`) or an animation trigger (e.g.
`[@trigger]="stateExp"`)

```ts
class BoundElementPropertyAst implements TemplateAst {
  readonly isAnimation: boolean;

  static fromBoundProperty(prop: BoundElementProperty);
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L91-L110)

## Properties

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| isAnimation | `boolean` |             |

## Methods

### fromBoundProperty

```ts
static fromBoundProperty(prop: BoundElementProperty);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L101-L105)

#### Parameters (#fromBoundProperty-parameters)

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| prop | `BoundElementProperty` |             |

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L107-L109)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
