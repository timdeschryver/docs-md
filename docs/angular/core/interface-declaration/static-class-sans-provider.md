---
kind: InterfaceDeclaration
name: StaticClassSansProvider
module: core
---

# StaticClassSansProvider

## description

Configures the `Injector` to return an instance of `useClass` for a token.
Base for `StaticClassProvider` decorator.

```ts
interface StaticClassSansProvider {
  useClass: Type<any>;
  deps: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L59-L71)

## publicApi

## Properties

| Name                                             | Type        | Description                                                                   |
| ------------------------------------------------ | ----------- | ----------------------------------------------------------------------------- |
| useClass                                         | `Type<any>` | An optional class to instantiate for the `token`. By default, the `provide`   |
| class is instantiated.                           |
| deps                                             | `any[]`     | A list of `token`s to be resolved by the injector. The list of values is then |
| used as arguments to the `useClass` constructor. |
