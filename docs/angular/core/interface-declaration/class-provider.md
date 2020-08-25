---
kind: InterfaceDeclaration
name: ClassProvider
module: core
---

# ClassProvider

## description

Configures the `Injector` to return an instance of `useClass` for a token.

```ts
interface ClassProvider {
  provide: any;
  multi?: boolean;

  // inherited from ClassSansProvider
  useClass: Type<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/provider.ts#L311-L322)

## see

["Dependency Injection Guide"](guide/dependency-injection).

## usageNotes

{@example core/di/ts/provider_spec.ts region='ClassProvider'}

Note that following two providers are not equal:

{@example core/di/ts/provider_spec.ts region='ClassProviderDifference'}

### Multi-value example

{@example core/di/ts/provider_spec.ts region='MultiProviderAspect'}

## publicApi

## Properties

| Name                                                                                       | Type      | Description                                                                                  |
| ------------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------- |
| provide                                                                                    | `any`     | An injection token. (Typically an instance of `Type` or `InjectionToken`, but can be `any`). |
| multi                                                                                      | `boolean` | When true, injector returns an array of instances. This is useful to allow multiple          |
| providers spread across many files to provide configuration information to a common token. |
