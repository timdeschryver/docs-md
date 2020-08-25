---
kind: InterfaceDeclaration
name: ExistingSansProvider
module: core
---

# ExistingSansProvider

## description

Configures the `Injector` to return a value of another `useExisting` token.

```ts
interface ExistingSansProvider {
  useExisting: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L161-L166)

## see

`ExistingProvider`
["Dependency Injection Guide"](guide/dependency-injection).

## publicApi

## Properties

| Name        | Type  | Description                                                             |
| ----------- | ----- | ----------------------------------------------------------------------- |
| useExisting | `any` | Existing `token` to return. (Equivalent to `injector.get(useExisting)`) |
