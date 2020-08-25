---
kind: InterfaceDeclaration
name: ɵɵInjectableDef
module: core
---

# ɵɵInjectableDef

## description

Information about how a type or `InjectionToken` interfaces with the DI system.

At a minimum, this includes a `factory` which defines how to create the given type `T`, possibly
requesting injection of other types if necessary.

Optionally, a `providedIn` parameter specifies that the given type belongs to a particular
`InjectorDef`, `NgModule`, or a special scope (e.g. `'root'`). A value of `null` indicates
that the injectable does not belong to any scope.

NOTE: This is a private type and should not be exported

```ts
interface ɵɵInjectableDef<T> {
  providedIn: InjectorType<any> | "root" | "platform" | "any" | null;
  token: unknown;
  factory: (t?: Type<any>) => T;
  value: T | undefined;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L29-L56)

## publicApi

## Properties

| Name       | Type               | Description |
| ---------- | ------------------ | ----------- |
| providedIn | `InjectorType<any> | "root"      | "platform" | "any"` | Specifies that the given type belongs to a particular injector: |

- `InjectorType` such as `NgModule`,
- `'root'` the root injector
- `'any'` all injectors.
- `null`, does not belong to any injector. Must be explicitly listed in the injector
  `providers`. |
  | token | `unknown` | The token to which this definition belongs.

Note that this may not be the same as the type that the `factory` will create. |
| factory | `(t?: Type<any>) => T` | Factory method to execute to create an instance of the injectable. |
| value | `T` | In a case of no explicit injector, a location where the instance of the injectable is stored. |
