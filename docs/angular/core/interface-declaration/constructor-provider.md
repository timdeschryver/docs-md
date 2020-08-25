---
kind: InterfaceDeclaration
name: ConstructorProvider
module: core
---

# ConstructorProvider

## description

Configures the `Injector` to return an instance of a token.

```ts
interface ConstructorProvider {
  provide: Type<any>;
  multi?: boolean;

  // inherited from ConstructorSansProvider
  deps?: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L140-L151)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## usageNotes

{@example core/di/ts/provider_spec.ts region='ConstructorProvider'}

### Multi-value example

{@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}

## publicApi

## Properties

| Name                                                                                       | Type        | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------ |
| provide                                                                                    | `Type<any>` | An injection token. Typically an instance of `Type` or `InjectionToken`, but can be `any`. |
| multi                                                                                      | `boolean`   | When true, injector returns an array of instances. This is useful to allow multiple        |
| providers spread across many files to provide configuration information to a common token. |
