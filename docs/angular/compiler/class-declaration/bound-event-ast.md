---
kind: ClassDeclaration
name: BoundEventAst
module: compiler
---

# BoundEventAst

## description

A binding for an element event (e.g. `(event)="handler()"`) or an animation trigger event (e.g.
`(@trigger.phase)="callback($event)"`).

```ts
class BoundEventAst implements TemplateAst {
  readonly fullName: string;
  readonly isAnimation: boolean;

  static calcFullName(
    name: string,
    target: string | null,
    phase: string | null
  ): string;
  static fromParsedEvent(event: ParsedEvent);
  visit(visitor: TemplateAstVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L116-L150)

## Properties

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| fullName    | `string`  |             |
| isAnimation | `boolean` |             |

## Methods

### calcFullName

```ts
static calcFullName(name: string, target: string|null, phase: string|null): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L128-L137)

#### Parameters (#calcFullName-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| name   | `string` |             |
| target | `string` |             |
| phase  | `string` |             |

### fromParsedEvent

```ts
static fromParsedEvent(event: ParsedEvent);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L139-L145)

#### Parameters (#fromParsedEvent-parameters)

| Name  | Type          | Description |
| ----- | ------------- | ----------- |
| event | `ParsedEvent` |             |

### visit

```ts
visit(visitor: TemplateAstVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L147-L149)

#### Parameters (#visit-parameters)

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| visitor | `TemplateAstVisitor` |             |
| context | `any`                |             |
