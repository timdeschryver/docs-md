---
kind: InterfaceDeclaration
name: InjectableType
module: core
---

# InjectableType

## description

A `Type` which has an `InjectableDef` static field.

`InjectableDefType`s contain their own Dependency Injection metadata and are usable in an
`InjectorDef`-based `StaticInjector.

```ts
interface InjectableType<T> {
  ɵprov: never;

  // inherited from Type
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L89-L94)

## publicApi

## Properties

| Name  | Type    | Description                                                                             |
| ----- | ------- | --------------------------------------------------------------------------------------- |
| ɵprov | `never` | Opaque type whose structure is highly version dependent. Do not rely on any properties. |
