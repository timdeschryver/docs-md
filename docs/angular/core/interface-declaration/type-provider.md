---
kind: InterfaceDeclaration
name: TypeProvider
module: core
---

# TypeProvider

## description

Configures the `Injector` to return an instance of `Type` when `Type' is used as the token.

Create an instance by invoking the `new` operator and supplying additional arguments.
This form is a short form of `TypeProvider`;

For more details, see the ["Dependency Injection Guide"](guide/dependency-injection).

```ts
interface TypeProvider {
  // inherited from Type
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L276-L276)

## usageNotes

{@example core/di/ts/provider_spec.ts region='TypeProvider'}

## publicApi
