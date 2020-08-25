---
kind: FunctionDeclaration
name: ɵɵdefineNgModule
module: core
---

# ɵɵdefineNgModule

```ts
function ɵɵdefineNgModule<T>(def: {
  /** Token representing the module. Used by DI. */
  type: T;

  /** List of components to bootstrap. */
  bootstrap?: Type<any>[] | (() => Type<any>[]);

  /** List of components, directives, and pipes declared by this module. */
  declarations?: Type<any>[] | (() => Type<any>[]);

  /** List of modules or `ModuleWithProviders` imported by this module. */
  imports?: Type<any>[] | (() => Type<any>[]);

  /**
   * List of modules, `ModuleWithProviders`, components, directives, or pipes exported by this
   * module.
   */
  exports?: Type<any>[] | (() => Type<any>[]);

  /** The set of schemas that declare elements to be allowed in the NgModule. */
  schemas?: SchemaMetadata[] | null;

  /** Unique ID for the module that is used with `getModuleFactory`. */
  id?: string | null;
}): never;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/definition.ts#L385-L426)

## codeGenApi

## Parameters

| Name | Type                                | Description                                     |
| ---- | ----------------------------------- | ----------------------------------------------- |
| def  | `{ type: T; bootstrap?: Type<any>[] | (() => Type<any>[]); declarations?: Type<any>[] | (() => Type<any>[]); imports?: Type<any>[] | (() => Type<any>[]); exports?: Type<any>[] | (() => Type<any>[]); schemas?: SchemaMetadata[] | null; id?: string | null; }` |  |
