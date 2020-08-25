---
kind: FunctionDeclaration
name: ɵgetLContext
module: core
---

# ɵgetLContext

## description

Returns the matching `LContext` data for a given DOM node, directive or component instance.

This function will examine the provided DOM element, component, or directive instance\'s
monkey-patched property to derive the `LContext` data. Once called then the monkey-patched
value will be that of the newly created `LContext`.

If the monkey-patched value is the `LView` instance then the context value for that
target will be created and the monkey-patch reference will be updated. Therefore when this
function is called it may mutate the provided element\'s, component\'s or any of the associated
directive\'s monkey-patch values.

If the monkey-patch value is not detected then the code will walk up the DOM until an element
is found which contains a monkey-patch reference. When that occurs then the provided element
will be updated with a new context (which is then returned). If the monkey-patch value is not
detected for a component/directive instance then it will throw an error (all components and
directives should be automatically monkey-patched by ivy).

```ts
function getLContext(target: any): LContext | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/context_discovery.ts#L41-L133)

## Parameters

| Name   | Type  | Description                       |
| ------ | ----- | --------------------------------- |
| target | `any` | Component, Directive or DOM Node. |
