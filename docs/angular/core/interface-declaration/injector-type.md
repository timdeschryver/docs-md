---
kind: InterfaceDeclaration
name: InjectorType
module: core
---

# InjectorType

## description

A type which has an `InjectorDef` static field.

`InjectorDefTypes` can be used to configure a `StaticInjector`.

```ts
interface InjectorType<T> {
  ɵinj: never;

  // inherited from Type
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L103-L108)

## publicApi

## Properties

| Name | Type    | Description                                                                             |
| ---- | ------- | --------------------------------------------------------------------------------------- |
| ɵinj | `never` | Opaque type whose structure is highly version dependent. Do not rely on any properties. |
