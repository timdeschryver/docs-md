---
kind: FunctionDeclaration
name: ɵpatchComponentDefWithScope
module: core
---

# ɵpatchComponentDefWithScope

## description

Patch the definition of a component with directives and pipes from the compilation scope of
a given module.

```ts
function patchComponentDefWithScope<C>(
  componentDef: ComponentDef<C>,
  transitiveScopes: NgModuleTransitiveScopes
);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/module.ts#L414-L431)

## Parameters

| Name             | Type                       | Description |
| ---------------- | -------------------------- | ----------- |
| componentDef     | `ComponentDef<C>`          |             |
| transitiveScopes | `NgModuleTransitiveScopes` |             |
