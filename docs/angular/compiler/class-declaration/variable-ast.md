---
kind: ClassDeclaration
name: VariableAst
module: compiler
---

# VariableAst

## description

A variable declaration on a <ng-template> (e.g. `var-someName="someLocalName"`).

```ts
class VariableAst implements TemplateAst {
  static fromParsedVariable(v: ParsedVariable);
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L167-L179)

## Methods

### fromParsedVariable

```ts
static fromParsedVariable(v: ParsedVariable);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L172-L174)

#### Parameters (#fromParsedVariable-parameters)

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| v    | `ParsedVariable` |             |

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L176-L178)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
