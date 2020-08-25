---
kind: TypeAliasDeclaration
name: StaticProvider
module: core
---

# StaticProvider

## description

Describes how an `Injector` should be configured as static (that is, without reflection).
A static provider provides tokens to an injector for various types of dependencies.

```ts
export type StaticProvider =
  | ValueProvider
  | ExistingProvider
  | StaticClassProvider
  | ConstructorProvider
  | FactoryProvider
  | any[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L258-L259)

## see

[Injector.create()](/api/core/Injector#create).
["Dependency Injection Guide"](guide/dependency-injection-providers).

## publicApi
