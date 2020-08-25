---
kind: FunctionDeclaration
name: ɵɵsetNgModuleScope
module: core
---

# ɵɵsetNgModuleScope

## description

Adds the module metadata that is necessary to compute the module's transitive scope to an
existing module definition.

Scope metadata of modules is not used in production builds, so calls to this function can be
marked pure to tree-shake it from the bundle, allowing for all referenced declarations
to become eligible for tree-shaking as well.

```ts
function ɵɵsetNgModuleScope(
  type: any,
  scope: {
    /** List of components, directives, and pipes declared by this module. */
    declarations?: Type<any>[] | (() => Type<any>[]);

    /** List of modules or `ModuleWithProviders` imported by this module. */
    imports?: Type<any>[] | (() => Type<any>[]);

    /**
     * List of modules, `ModuleWithProviders`, components, directives, or pipes exported by this
     * module.
     */
    exports?: Type<any>[] | (() => Type<any>[]);
  }
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/definition.ts#L438-L457)

## codeGenApi

## Parameters

| Name  | Type                          | Description                                |
| ----- | ----------------------------- | ------------------------------------------ |
| type  | `any`                         |                                            |
| scope | `{ declarations?: Type<any>[] | (() => Type<any>[]); imports?: Type<any>[] | (() => Type<any>[]); exports?: Type<any>[] | (() => Type<any>[]); }` |  |
