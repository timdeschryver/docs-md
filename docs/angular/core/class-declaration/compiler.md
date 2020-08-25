---
kind: ClassDeclaration
name: Compiler
module: core
---

# Compiler

## description

Low-level service for running the angular compiler during runtime
to create {@link ComponentFactory}s, which
can later be used to create and render a Component instance.

Each `@NgModule` provides an own `Compiler` to its injector,
that will use the directives/pipes of the ng module for compilation
of components.

```ts
class Compiler {
  compileModuleSync: <T>(
    moduleType: Type<T>
  ) => NgModuleFactory<T> = Compiler_compileModuleSync;
  compileModuleAsync: <T>(
    moduleType: Type<T>
  ) => Promise<NgModuleFactory<T>> = Compiler_compileModuleAsync;
  compileModuleAndAllComponentsSync: <T>(
    moduleType: Type<T>
  ) => ModuleWithComponentFactories<
    T
  > = Compiler_compileModuleAndAllComponentsSync;
  compileModuleAndAllComponentsAsync: <T>(
    moduleType: Type<T>
  ) => Promise<
    ModuleWithComponentFactories<T>
  > = Compiler_compileModuleAndAllComponentsAsync;

  getModuleId(moduleType: Type<any>): string | undefined;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L97-L139)

## publicApi

## Properties

| Name                                     | Type                                                                   | Description                                                                                   |
| ---------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| compileModuleSync                        | `<T>(moduleType: Type<T>) => NgModuleFactory<T>`                       | Compiles the given NgModule and all of its components. All templates of the components listed |
| in `entryComponents` have to be inlined. |
| compileModuleAsync                       | `<T>(moduleType: Type<T>) => Promise<NgModuleFactory<T>>`              | Compiles the given NgModule and all of its components                                         |
| compileModuleAndAllComponentsSync        | `<T>(moduleType: Type<T>) => ModuleWithComponentFactories<T>`          | Same as {@link #compileModuleSync} but also creates ComponentFactories for all components.    |
| compileModuleAndAllComponentsAsync       | `<T>(moduleType: Type<T>) => Promise<ModuleWithComponentFactories<T>>` | Same as {@link #compileModuleAsync} but also creates ComponentFactories for all components.   |

## Methods

### clearCache

#### description (#clearCache-description)

Clears all caches.

```ts
clearCache(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L126-L126)

### clearCacheFor

#### description (#clearCacheFor-description)

Clears the cache for the given component/ngModule.

```ts
clearCacheFor(type: Type<any>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L131-L131)

#### Parameters (#clearCacheFor-parameters)

| Name | Type        | Description |
| ---- | ----------- | ----------- |
| type | `Type<any>` |             |

### getModuleId

#### description (#getModuleId-description)

Returns the id for a given NgModule, if one is defined and known to the compiler.

```ts
getModuleId(moduleType: Type<any>): string|undefined;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L136-L138)

#### Parameters (#getModuleId-parameters)

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| moduleType | `Type<any>` |             |
