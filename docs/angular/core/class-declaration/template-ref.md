---
kind: ClassDeclaration
name: TemplateRef
module: core
---

# TemplateRef

## description

Represents an embedded template that can be used to instantiate embedded views.
To instantiate embedded views based on a template, use the `ViewContainerRef`
method `createEmbeddedView()`.

Access a `TemplateRef` instance by placing a directive on an `<ng-template>`
element (or directive prefixed with `*`). The `TemplateRef` for the embedded view
is injected into the constructor of the directive,
using the `TemplateRef` token.

You can also use a `Query` to find a `TemplateRef` associated with
a component or a directive.

```ts
class TemplateRef<C> {
  static __NG_ELEMENT_ID__: () => TemplateRef<any> | null = () =>
    SWITCH_TEMPLATE_REF_FACTORY(TemplateRef, ElementRef);

  abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/template_ref.ts#L34-L64)

## see

`ViewContainerRef`
[Navigate the Component Tree with DI](guide/dependency-injection-navtree)

## publicApi

## Properties

| Name              | Type                    | Description |
| ----------------- | ----------------------- | ----------- |
| **NG_ELEMENT_ID** | `() => TemplateRef<any> | null`       |  |

## Methods

### createEmbeddedView

#### description (#createEmbeddedView-description)

Instantiates an embedded view based on this template,
and attaches it to the view container.

```ts
abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/template_ref.ts#L56-L56)

#### Parameters (#createEmbeddedView-parameters)

| Name    | Type | Description                                                |
| ------- | ---- | ---------------------------------------------------------- |
| context | `C`  | The data-binding context of the embedded view, as declared |

#### returns (#createEmbeddedView-returns)

The new embedded view object.
