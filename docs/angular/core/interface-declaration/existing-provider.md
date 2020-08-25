---
kind: InterfaceDeclaration
name: ExistingProvider
module: core
---

# ExistingProvider

## description

Configures the `Injector` to return a value of another `useExisting` token.

```ts
interface ExistingProvider {
  provide: any;
  multi?: boolean;

  // inherited from ExistingSansProvider
  useExisting: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L183-L194)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## usageNotes

{@example core/di/ts/provider_spec.ts region='ExistingProvider'}

### Multi-value example

{@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}

## publicApi

## Properties

| Name                                                                                       | Type      | Description                                                                                |
| ------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------ |
| provide                                                                                    | `any`     | An injection token. Typically an instance of `Type` or `InjectionToken`, but can be `any`. |
| multi                                                                                      | `boolean` | When true, injector returns an array of instances. This is useful to allow multiple        |
| providers spread across many files to provide configuration information to a common token. |
