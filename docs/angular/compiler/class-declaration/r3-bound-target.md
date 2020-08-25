---
kind: ClassDeclaration
name: R3BoundTarget
module: compiler
---

# R3BoundTarget

## description

Metadata container for a `Target` that allows queries for specific bits of metadata.

See `BoundTarget` for documentation on the individual methods.

```ts
class R3BoundTarget<DirectiveT extends DirectiveMeta>
  implements BoundTarget<DirectiveT> {
  getDirectivesOfNode(node: Element | Template): DirectiveT[] | null;
  getReferenceTarget(
    ref: Reference
  ):
    | { directive: DirectiveT; node: Element | Template }
    | Element
    | Template
    | null;
  getConsumerOfBinding(
    binding: BoundAttribute | BoundEvent | TextAttribute
  ): DirectiveT | Element | Template | null;
  getExpressionTarget(expr: AST): Reference | Variable | null;
  getTemplateOfSymbol(symbol: Reference | Variable): Template | null;
  getNestingLevel(template: Template): number;
  getUsedDirectives(): DirectiveT[];
  getUsedPipes(): string[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L508-L554)

## Methods

### getDirectivesOfNode

```ts
getDirectivesOfNode(node: Element|Template): DirectiveT[]|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L519-L521)

#### Parameters (#getDirectivesOfNode-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| node | `Element | Template`   |  |

### getReferenceTarget

```ts
getReferenceTarget(ref: Reference): {directive: DirectiveT, node: Element|Template}|Element   |Template|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L523-L526)

#### Parameters (#getReferenceTarget-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| ref  | `Reference` |             |

### getConsumerOfBinding

```ts
getConsumerOfBinding(binding: BoundAttribute|BoundEvent|TextAttribute): DirectiveT|Element   |Template|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L528-L531)

#### Parameters (#getConsumerOfBinding-parameters)

| Name    | Type            | Description |
| ------- | --------------- | ----------- |
| binding | `BoundAttribute | BoundEvent  | TextAttribute` |  |

### getExpressionTarget

```ts
getExpressionTarget(expr: AST): Reference|Variable|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L533-L535)

#### Parameters (#getExpressionTarget-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| expr | `AST` |             |

### getTemplateOfSymbol

```ts
getTemplateOfSymbol(symbol: Reference|Variable): Template|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L537-L539)

#### Parameters (#getTemplateOfSymbol-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| symbol | `Reference | Variable`   |  |

### getNestingLevel

```ts
getNestingLevel(template: Template): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L541-L543)

#### Parameters (#getNestingLevel-parameters)

| Name     | Type       | Description |
| -------- | ---------- | ----------- |
| template | `Template` |             |

### getUsedDirectives

```ts
getUsedDirectives(): DirectiveT[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L545-L549)

### getUsedPipes

```ts
getUsedPipes(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L551-L553)
