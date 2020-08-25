---
kind: ClassDeclaration
name: InjectionToken
module: core
---

# InjectionToken

## description

Creates a token that can be used in a DI Provider.

Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
runtime representation) such as when injecting an interface, callable type, array or
parameterized type.

`InjectionToken` is parameterized on `T` which is the type of object which will be returned by
the `Injector`. This provides additional level of type safety.

```
interface MyInterface {...}
var myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
// myInterface is inferred to be MyInterface.
```

When creating an `InjectionToken`, you can optionally specify a factory function which returns
(possibly by creating) a default value of the parameterized type `T`. This sets up the
`InjectionToken` using this factory as a provider as if it was defined explicitly in the
application's root injector. If the factory function, which takes zero arguments, needs to inject
dependencies, it can do so using the `inject` function. See below for an example.

Additionally, if a `factory` is specified you can also specify the `providedIn` option, which
overrides the above behavior and marks the token as belonging to a particular `@NgModule`. As
mentioned above, `'root'` is the default value for `providedIn`.

```ts
class InjectionToken<T> {
  readonly ngMetadataName = "InjectionToken";
  readonly ɵprov: never | undefined;

  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injection_token.ts#L53-L80)

## usageNotes

### Basic Example

### Plain InjectionToken

{@example core/di/ts/injector_spec.ts region='InjectionToken'}

### Tree-shakable InjectionToken

{@example core/di/ts/injector_spec.ts region='ShakableInjectionToken'}

## publicApi

## Properties

| Name           | Type               | Description |
| -------------- | ------------------ | ----------- |
| ngMetadataName | `"InjectionToken"` |             |
| ɵprov          | `undefined`        |             |

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injection_token.ts#L77-L79)
