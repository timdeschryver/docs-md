---
kind: InterfaceDeclaration
name: ConstructorSansProvider
module: core
---

# ConstructorSansProvider

## description

Configures the `Injector` to return an instance of a token.

```ts
interface ConstructorSansProvider {
  deps?: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L118-L123)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## usageNotes

```ts
## Injectable(SomeModule,
{deps: []})
class MyService {}
```

## publicApi

## Properties

| Name | Type    | Description                                        |
| ---- | ------- | -------------------------------------------------- |
| deps | `any[]` | A list of `token`s to be resolved by the injector. |
