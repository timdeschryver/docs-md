---
kind: FunctionDeclaration
name: ɵɵdefineInjectable
module: core
---

# ɵɵdefineInjectable

## description

Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
in which injectors (if any) it will be available.

This should be assigned to a static `ɵprov` field on a type, which will then be an
`InjectableType`.

Options:

- `providedIn` determines which injectors will include the injectable, by either associating it
  with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
  provided in the `'root'` injector, which will be the application-level injector in most apps.
- `factory` gives the zero argument function which will create an instance of the injectable.
  The factory can call `inject` to access the `Injector` and request injection of dependencies.

```ts
function ɵɵdefineInjectable<T>(opts: {
  token: unknown;
  providedIn?: Type<any> | "root" | "platform" | "any" | null;
  factory: () => T;
}): never;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L141-L151)

## codeGenApi

## Parameters

| Name | Type                                      | Description |
| ---- | ----------------------------------------- | ----------- |
| opts | `{ token: unknown; providedIn?: Type<any> | 'root'      | 'platform' | 'any' | null; factory: () => T; }` |  |
