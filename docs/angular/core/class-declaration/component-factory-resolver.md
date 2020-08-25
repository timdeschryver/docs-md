---
kind: ClassDeclaration
name: ComponentFactoryResolver
module: core
---

# ComponentFactoryResolver

## description

A simple registry that maps `Components` to generated `ComponentFactory` classes
that can be used to create instances of components.
Use to obtain the factory for a given component type,
then use the factory's `create()` method to create a component of that type.

```ts
class ComponentFactoryResolver {
  static NULL: ComponentFactoryResolver = new _NullComponentFactoryResolver();

  abstract resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory_resolver.ts#L45-L52)

## see

[Dynamic Components](guide/dynamic-component-loader)

## publicApi

## Properties

| Name | Type                       | Description |
| ---- | -------------------------- | ----------- |
| NULL | `ComponentFactoryResolver` |             |

## Methods

### resolveComponentFactory

#### description (#resolveComponentFactory-description)

Retrieves the factory object that creates a component of the given type.

```ts
abstract resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory_resolver.ts#L51-L51)

#### Parameters (#resolveComponentFactory-parameters)

| Name      | Type      | Description         |
| --------- | --------- | ------------------- |
| component | `Type<T>` | The component type. |
