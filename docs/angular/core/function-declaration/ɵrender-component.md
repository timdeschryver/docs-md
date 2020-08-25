---
kind: FunctionDeclaration
name: ɵrenderComponent
module: core
---

# ɵrenderComponent

## description

Bootstraps a Component into an existing host element and returns an instance
of the component.

Use this function to bootstrap a component into the DOM tree. Each invocation
of this function will create a separate tree of components, injectors and
change detection cycles and lifetimes. To dynamically insert a new component
into an existing tree such that it shares the same injection, change detection
and object lifetime, use {@link ViewContainer#createComponent}.

```ts
function renderComponent<T>(
  componentType:
    | ComponentType<T>
    | Type<T> /* Type as workaround for: Microsoft/TypeScript/issues/4881 */,
  opts: CreateComponentOptions = {}
): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component.ts#L109-L158)

## Parameters

| Name          | Type                     | Description                                     |
| ------------- | ------------------------ | ----------------------------------------------- |
| componentType | `ComponentType<T>        | Type<T>`                                        | Component to bootstrap |
| options       | ``                       | Optional parameters which control bootstrapping |
| opts          | `CreateComponentOptions` |                                                 |
