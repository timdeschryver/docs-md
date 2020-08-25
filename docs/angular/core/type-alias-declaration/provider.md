---
kind: TypeAliasDeclaration
name: Provider
module: core
---

# Provider

## description

Describes how the `Injector` should be configured.

```ts
export type Provider =
  | TypeProvider
  | ValueProvider
  | ClassProvider
  | ConstructorProvider
  | ExistingProvider
  | FactoryProvider
  | any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L332-L333)

## see

["Dependency Injection Guide"](guide/dependency-injection).

`StaticProvider`

## publicApi
