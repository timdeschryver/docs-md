---
kind: ClassDeclaration
name: Sanitizer
module: core
---

# Sanitizer

## description

Sanitizer is used by the views to sanitize potentially dangerous values.

```ts
class Sanitizer {
  static ɵprov = ɵɵdefineInjectable({
    token: Sanitizer,
    providedIn: "root",
    factory: () => null,
  });

  abstract sanitize(
    context: SecurityContext,
    value: {} | string | null
  ): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitizer.ts#L17-L25)

## publicApi

## Properties

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| ɵprov | `never` |             |

## Methods

### sanitize

```ts
abstract sanitize(context: SecurityContext, value: {}|string|null): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitizer.ts#L18-L18)

#### Parameters (#sanitize-parameters)

| Name    | Type              | Description |
| ------- | ----------------- | ----------- |
| context | `SecurityContext` |             |
| value   | `string           | {}`         |  |
