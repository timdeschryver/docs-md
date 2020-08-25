---
kind: InterfaceDeclaration
name: FactoryProvider
module: core
---

# FactoryProvider

## description

Configures the `Injector` to return a value by invoking a `useFactory` function.

```ts
interface FactoryProvider {
  provide: any;
  multi?: boolean;

  // inherited from FactorySansProvider
  useFactory: Function;
  deps?: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L236-L247)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## usageNotes

{@example core/di/ts/provider_spec.ts region='FactoryProvider'}

Dependencies can also be marked as optional:

{@example core/di/ts/provider_spec.ts region='FactoryProviderOptionalDeps'}

### Multi-value example

{@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}

## publicApi

## Properties

| Name                                                                                       | Type      | Description                                                                                  |
| ------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------- |
| provide                                                                                    | `any`     | An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`). |
| multi                                                                                      | `boolean` | When true, injector returns an array of instances. This is useful to allow multiple          |
| providers spread across many files to provide configuration information to a common token. |
