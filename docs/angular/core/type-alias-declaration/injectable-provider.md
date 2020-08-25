---
kind: TypeAliasDeclaration
name: InjectableProvider
module: core
---

# InjectableProvider

## description

Injectable providers used in `@Injectable` decorator.

```ts
export type InjectableProvider =
  | ValueSansProvider
  | ExistingSansProvider
  | StaticClassSansProvider
  | ConstructorSansProvider
  | FactorySansProvider
  | ClassSansProvider;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injectable.ts#L24-L25)

## publicApi
