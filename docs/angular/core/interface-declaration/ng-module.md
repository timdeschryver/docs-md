---
kind: InterfaceDeclaration
name: NgModule
module: core
---

# NgModule

## description

Type of the NgModule metadata.

```ts
interface NgModule {
  providers?: Provider[];
  declarations?: Array<Type<any> | any[]>;
  imports?: Array<Type<any> | ModuleWithProviders<{}> | any[]>;
  exports?: Array<Type<any> | any[]>;
  entryComponents?: Array<Type<any> | any[]>;
  bootstrap?: Array<Type<any> | any[]>;
  schemas?: Array<SchemaMetadata | any[]>;
  id?: string;
  jit?: true;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/ng_module.ts#L114-L303)

## publicApi

## Properties

| Name                                       | Type         | Description                                                      |
| ------------------------------------------ | ------------ | ---------------------------------------------------------------- |
| providers                                  | `Provider[]` | The set of injectable objects that are available in the injector |
| of this module.                            |
| declarations                               | `(any[]      | Type<any>)[]`                                                    | The set of components, directives, and pipes ([declarables](guide/glossary#declarable)) |
| that belong to this module.                |
| imports                                    | `(any[]      | Type<any>                                                        | ModuleWithProviders<{}>)[]` | The set of NgModules whose exported [declarables](guide/glossary#declarable) |
| are available to templates in this module. |
| exports                                    | `(any[]      | Type<any>)[]`                                                    | The set of components, directives, and pipes declared in this |

NgModule that can be used in the template of any component that is part of an
NgModule that imports this NgModule. Exported declarations are the module's public API.

A declarable belongs to one and only one NgModule.
A module can list another module among its exports, in which case all of that module's
public declaration are exported. |
| entryComponents | `(any[] | Type<any>)[]` | The set of components to compile when this NgModule is defined,
so that they can be dynamically loaded into the view.

For each component listed here, Angular creates a `ComponentFactory`
and stores it in the `ComponentFactoryResolver`.

Angular automatically adds components in the module's bootstrap
and route definitions into the `entryComponents` list. Use this
option to add components that are bootstrapped
using one of the imperative techniques, such as `ViewContainerRef.createComponent()`. |
| bootstrap | `(any[] | Type<any>)[]` | The set of components that are bootstrapped when
this module is bootstrapped. The components listed here
are automatically added to `entryComponents`. |
| schemas | `(any[] | SchemaMetadata)[]` | The set of schemas that declare elements to be allowed in the NgModule.
Elements and properties that are neither Angular components nor directives
must be declared in a schema.

Allowed value are `NO_ERRORS_SCHEMA` and `CUSTOM_ELEMENTS_SCHEMA`. |
| id | `string` | A name or path that uniquely identifies this NgModule in `getModuleFactory`.
If left `undefined`, the NgModule is not registered with
`getModuleFactory`. |
| jit | `true` | When present, this module is ignored by the AOT compiler.
It remains in distributed code, and the JIT compiler attempts to compile it
at run time, in the browser.
To ensure the correct behavior, the app must import `@angular/compiler`. |
