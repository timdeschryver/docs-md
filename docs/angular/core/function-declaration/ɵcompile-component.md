---
kind: FunctionDeclaration
name: ɵcompileComponent
module: core
---

# ɵcompileComponent

## description

Compile an Angular component according to its decorator metadata, and patch the resulting
component def (ɵcmp) onto the component type.

Compilation may be asynchronous (due to the need to resolve URLs for the component template or
other resources, for example). In the event that compilation is not immediate, `compileComponent`
will enqueue resource resolution into a global queue and will fail to return the `ɵcmp`
until the global queue has been resolved with a call to `resolveComponentResources`.

```ts
function compileComponent(type: Type<any>, metadata: Component): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/directive.ts#L40-L136)

## Parameters

| Name     | Type        | Description |
| -------- | ----------- | ----------- |
| type     | `Type<any>` |             |
| metadata | `Component` |             |
