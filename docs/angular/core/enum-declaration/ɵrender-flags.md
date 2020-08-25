---
kind: EnumDeclaration
name: ɵRenderFlags
module: core
---

# ɵRenderFlags

## description

Flags passed into template functions to determine which blocks (i.e. creation, update)
should be executed.

Typically, a template runs both the creation block and the update block on initialization and
subsequent runs only execute the update block. However, dynamically created views require that
the creation block be executed separately from the update block (for backwards compat).

```ts
export const enum RenderFlags {
  /* Whether to run the creation block (e.g. create elements and directives) */
  Create = 0b01,

  /* Whether to run the update block (e.g. refresh bindings) */
  Update = 0b10,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L63-L69)
