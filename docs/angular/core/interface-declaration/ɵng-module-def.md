---
kind: InterfaceDeclaration
name: ɵNgModuleDef
module: core
---

# ɵNgModuleDef

## description

Runtime link information for NgModules.

This is the internal data structure used by the runtime to assemble components, directives,
pipes, and injectors.

NOTE: Always use `ɵɵdefineNgModule` function to create this object,
never create the object directly since the shape of this object
can change between versions.

```ts
interface NgModuleDef<T> {
  type: T;
  bootstrap: Type<any>[] | (() => Type<any>[]);
  declarations: Type<any>[] | (() => Type<any>[]);
  imports: Type<any>[] | (() => Type<any>[]);
  exports: Type<any>[] | (() => Type<any>[]);
  transitiveCompileScopes: NgModuleTransitiveScopes | null;
  schemas: SchemaMetadata[] | null;
  id: string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/ng_module.ts#L49-L80)

## Properties

| Name                    | Type                       | Description                                                         |
| ----------------------- | -------------------------- | ------------------------------------------------------------------- |
| type                    | `T`                        | Token representing the module. Used by DI.                          |
| bootstrap               | `Type<any>[]               | (() => Type<any>[])`                                                | List of components to bootstrap. |
| declarations            | `Type<any>[]               | (() => Type<any>[])`                                                | List of components, directives, and pipes declared by this module. |
| imports                 | `Type<any>[]               | (() => Type<any>[])`                                                | List of modules or `ModuleWithProviders` imported by this module. |
| exports                 | `Type<any>[]               | (() => Type<any>[])`                                                | List of modules, `ModuleWithProviders`, components, directives, or pipes exported by this |
| module.                 |
| transitiveCompileScopes | `NgModuleTransitiveScopes` | Cached value of computed `transitiveCompileScopes` for this module. |

This should never be read directly, but accessed via `transitiveScopesFor`. |
| schemas | `SchemaMetadata[]` | The set of schemas that declare elements to be allowed in the NgModule. |
| id | `string` | Unique ID for the module with which it should be registered. |
