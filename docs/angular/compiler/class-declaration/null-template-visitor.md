---
kind: ClassDeclaration
name: NullTemplateVisitor
module: compiler
---

# NullTemplateVisitor

## description

A visitor that accepts each node but doesn't do anything. It is intended to be used
as the base class for a visitor that is only interested in a subset of the node types.

```ts
class NullTemplateVisitor implements TemplateAstVisitor {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L306-L319)

## Methods

### visitNgContent

```ts
visitNgContent(ast: NgContentAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L307-L307)

#### Parameters (#visitNgContent-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `NgContentAst` |             |
| context | `any`          |             |

### visitEmbeddedTemplate

```ts
visitEmbeddedTemplate(ast: EmbeddedTemplateAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L308-L308)

#### Parameters (#visitEmbeddedTemplate-parameters)

| Name    | Type                  | Description |
| ------- | --------------------- | ----------- |
| ast     | `EmbeddedTemplateAst` |             |
| context | `any`                 |             |

### visitElement

```ts
visitElement(ast: ElementAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L309-L309)

#### Parameters (#visitElement-parameters)

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| ast     | `ElementAst` |             |
| context | `any`        |             |

### visitReference

```ts
visitReference(ast: ReferenceAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L310-L310)

#### Parameters (#visitReference-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `ReferenceAst` |             |
| context | `any`          |             |

### visitVariable

```ts
visitVariable(ast: VariableAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L311-L311)

#### Parameters (#visitVariable-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| ast     | `VariableAst` |             |
| context | `any`         |             |

### visitEvent

```ts
visitEvent(ast: BoundEventAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L312-L312)

#### Parameters (#visitEvent-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| ast     | `BoundEventAst` |             |
| context | `any`           |             |

### visitElementProperty

```ts
visitElementProperty(ast: BoundElementPropertyAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L313-L313)

#### Parameters (#visitElementProperty-parameters)

| Name    | Type                      | Description |
| ------- | ------------------------- | ----------- |
| ast     | `BoundElementPropertyAst` |             |
| context | `any`                     |             |

### visitAttr

```ts
visitAttr(ast: AttrAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L314-L314)

#### Parameters (#visitAttr-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| ast     | `AttrAst` |             |
| context | `any`     |             |

### visitBoundText

```ts
visitBoundText(ast: BoundTextAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L315-L315)

#### Parameters (#visitBoundText-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `BoundTextAst` |             |
| context | `any`          |             |

### visitText

```ts
visitText(ast: TextAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L316-L316)

#### Parameters (#visitText-parameters)

| Name    | Type      | Description |
| ------- | --------- | ----------- |
| ast     | `TextAst` |             |
| context | `any`     |             |

### visitDirective

```ts
visitDirective(ast: DirectiveAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L317-L317)

#### Parameters (#visitDirective-parameters)

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| ast     | `DirectiveAst` |             |
| context | `any`          |             |

### visitDirectiveProperty

```ts
visitDirectiveProperty(ast: BoundDirectivePropertyAst, context: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/template_parser/template_ast.ts#L318-L318)

#### Parameters (#visitDirectiveProperty-parameters)

| Name    | Type                        | Description |
| ------- | --------------------------- | ----------- |
| ast     | `BoundDirectivePropertyAst` |             |
| context | `any`                       |             |
