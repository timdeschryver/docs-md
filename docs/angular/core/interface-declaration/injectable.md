---
kind: InterfaceDeclaration
name: Injectable
module: core
---

# Injectable

## description

Type of the Injectable metadata.

```ts
interface Injectable {
  providedIn?: Type<any> | "root" | "platform" | "any" | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injectable.ts#L65-L78)

## publicApi

## Properties

| Name       | Type       | Description |
| ---------- | ---------- | ----------- |
| providedIn | `Type<any> | "root"      | "platform" | "any"` | Determines which injectors will provide the injectable, |

by either associating it with an `@NgModule` or other `InjectorType`,
or by specifying that this injectable should be provided in one of the following injectors:

- 'root' : The application-level injector in most apps.
- 'platform' : A special singleton platform injector shared by all
  applications on the page.
- 'any' : Provides a unique instance in each lazy loaded module while all eagerly loaded
  modules share one instance. |
