---
kind: ClassDeclaration
name: ɵComponentFactory
module: core
---

# ɵComponentFactory

## description

Base class for a factory that can create a component dynamically.
Instantiate a factory for a given type of component with `resolveComponentFactory()`.
Use the resulting `ComponentFactory.create()` method to create a component of that type.

```ts
class ComponentFactory<C> {
  abstract create(
    injector: Injector,
    projectableNodes?: any[][],
    rootSelectorOrNode?: string | any,
    ngModule?: NgModuleRef<any>
  ): ComponentRef<C>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory.ts#L79-L106)

## see

[Dynamic Components](guide/dynamic-component-loader)

## publicApi

## Methods

### create

#### description (#create-description)

Creates a new component.

```ts
abstract create(   injector: Injector, projectableNodes?: any[][], rootSelectorOrNode?: string|any,   ngModule?: NgModuleRef<any>): ComponentRef<C>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory.ts#L103-L105)

#### Parameters (#create-parameters)

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| injector           | `Injector`         |             |
| projectableNodes   | `any[][]`          |             |
| rootSelectorOrNode | `any`              |             |
| ngModule           | `NgModuleRef<any>` |             |
