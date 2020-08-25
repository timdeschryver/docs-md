---
kind: FunctionDeclaration
name: ɵɵdefineInjector
module: core
---

# ɵɵdefineInjector

## description

Construct an `InjectorDef` which configures an injector.

This should be assigned to a static injector def (`ɵinj`) field on a type, which will then be an
`InjectorType`.

Options:

- `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
  create the type must be provided. If that factory function needs to inject arguments, it can
  use the `inject` function.
- `providers`: an optional array of providers to add to the injector. Each provider must
  either have a factory or point to a type which has a `ɵprov` static property (the
  type must be an `InjectableType`).
- `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
  whose providers will also be added to the injector. Locally provided types will override
  providers from imports.

```ts
function ɵɵdefineInjector(options: {
  factory: () => any;
  providers?: any[];
  imports?: any[];
}): never;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L180-L187)

## publicApi

## Parameters

| Name    | Type                                                          | Description |
| ------- | ------------------------------------------------------------- | ----------- |
| options | `{ factory: () => any; providers?: any[]; imports?: any[]; }` |             |
