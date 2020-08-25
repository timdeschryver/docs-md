---
kind: ClassDeclaration
name: NgModuleRef
module: core
---

# NgModuleRef

## description

Represents an instance of an `NgModule` created by an `NgModuleFactory`.
Provides access to the `NgModule` instance and related objects.

```ts
class NgModuleRef<T> {
  abstract destroy(): void;
  abstract onDestroy(callback: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory.ts#L21-L47)

## publicApi

## Methods

### destroy

#### description (#destroy-description)

Destroys the module instance and all of the data structures associated with it.

```ts
abstract destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory.ts#L41-L41)

### onDestroy

#### description (#onDestroy-description)

Registers a callback to be executed when the module is destroyed.

```ts
abstract onDestroy(callback: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory.ts#L46-L46)

#### Parameters (#onDestroy-parameters)

| Name     | Type         | Description |
| -------- | ------------ | ----------- |
| callback | `() => void` |             |
