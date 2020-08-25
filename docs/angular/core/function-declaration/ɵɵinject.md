---
kind: FunctionDeclaration
name: ɵɵinject
module: core
---

# ɵɵinject

```ts
function ɵɵinject<T>(
  token: Type<T> | InjectionToken<T>,
  flags = InjectFlags.Default
): T | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector_compatibility.ts#L115-L117)

## Parameters

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| token | `Type<T>      | InjectionToken<T>` |  |
| flags | `InjectFlags` |                    |

## Overloads

### description

Generated instruction: Injects a token from the currently active injector.

Must be used in the context of a factory function such as one defined for an
`InjectionToken`. Throws an error if not called from such a context.

(Additional documentation moved to `inject`, as it is the public API, and an alias for this
instruction)

```ts
function ɵɵinject<T>(token: Type<T> | InjectionToken<T>): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector_compatibility.ts#L113-L113)

### see

inject

### codeGenApi

### Parameters

| Name  | Type     | Description        |
| ----- | -------- | ------------------ |
| token | `Type<T> | InjectionToken<T>` |  |

```ts
function ɵɵinject<T>(
  token: Type<T> | InjectionToken<T>,
  flags?: InjectFlags
): T | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/injector_compatibility.ts#L114-L114)

### Parameters

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| token | `Type<T>      | InjectionToken<T>` |  |
| flags | `InjectFlags` |                    |
