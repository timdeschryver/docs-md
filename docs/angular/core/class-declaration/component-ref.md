---
kind: ClassDeclaration
name: ComponentRef
module: core
---

# ComponentRef

## description

Represents a component created by a `ComponentFactory`.
Provides access to the component instance and related objects,
and provides the means of destroying the instance.

```ts
class ComponentRef<C> {
  abstract destroy(): void;
  abstract onDestroy(callback: Function): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory.ts#L24-L68)

## publicApi

## Methods

### destroy

#### description (#destroy-description)

Destroys the component instance and all of the data structures associated with it.

```ts
abstract destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory.ts#L59-L59)

### onDestroy

#### description (#onDestroy-description)

A lifecycle hook that provides additional developer-defined cleanup
functionality for the component.

```ts
abstract onDestroy(callback: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory.ts#L67-L67)

#### Parameters (#onDestroy-parameters)

| Name     | Type       | Description                                              |
| -------- | ---------- | -------------------------------------------------------- |
| callback | `Function` | A handler function that cleans up developer-defined data |
