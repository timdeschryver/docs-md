---
kind: InterfaceDeclaration
name: FactorySansProvider
module: core
---

# FactorySansProvider

## description

Configures the `Injector` to return a value by invoking a `useFactory` function.

```ts
interface FactorySansProvider {
  useFactory: Function;
  deps?: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L204-L216)

## see

`FactoryProvider`
["Dependency Injection Guide"](guide/dependency-injection).

## publicApi

## Properties

| Name                                             | Type       | Description                                                                           |
| ------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------- |
| useFactory                                       | `Function` | A function to invoke to create a value for this `token`. The function is invoked with |
| resolved values of `token`s in the `deps` field. |
| deps                                             | `any[]`    | A list of `token`s to be resolved by the injector. The list of values is then         |
| used as arguments to the `useFactory` function.  |
