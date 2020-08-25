---
kind: InterfaceDeclaration
name: ClassSansProvider
module: core
---

# ClassSansProvider

## description

Configures the `Injector` to return a value by invoking a `useClass` function.
Base for `ClassProvider` decorator.

```ts
interface ClassSansProvider {
  useClass: Type<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L286-L291)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## publicApi

## Properties

| Name     | Type        | Description                           |
| -------- | ----------- | ------------------------------------- |
| useClass | `Type<any>` | Class to instantiate for the `token`. |
