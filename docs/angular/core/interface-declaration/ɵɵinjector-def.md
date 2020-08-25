---
kind: InterfaceDeclaration
name: ɵɵInjectorDef
module: core
---

# ɵɵInjectorDef

## description

Information about the providers to be included in an `Injector` as well as how the given type
which carries the information should be created by the DI system.

An `InjectorDef` can import other types which have `InjectorDefs`, forming a deep nested
structure of providers with a defined priority (identically to how `NgModule`s also have
an import/dependency structure).

NOTE: This is a private type and should not be exported

```ts
interface ɵɵInjectorDef<T> {
  factory: () => T;
  providers: (
    | Type<any>
    | ValueProvider
    | ExistingProvider
    | FactoryProvider
    | ConstructorProvider
    | StaticClassProvider
    | ClassProvider
    | any[]
  )[];
  imports: (InjectorType<any> | InjectorTypeWithProviders<any>)[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L70-L79)

## publicApi

## Properties

| Name      | Type                | Description                        |
| --------- | ------------------- | ---------------------------------- |
| factory   | `() => T`           |                                    |
| providers | `(any[]             | Type<any>                          | ValueProvider | ExistingProvider | FactoryProvider | ConstructorProvider | StaticClassProvider | ClassProvider)[]` |  |
| imports   | `(InjectorType<any> | InjectorTypeWithProviders<any>)[]` |  |
