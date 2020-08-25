---
kind: FunctionDeclaration
name: ɵunwrapSafeValue
module: core
---

# ɵunwrapSafeValue

```ts
function unwrapSafeValue<T>(value: T | SafeValue): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L100-L103)

## Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T   | SafeValue`  |  |

## Overloads

```ts
function unwrapSafeValue(value: SafeValue): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L98-L98)

### Parameters

| Name  | Type        | Description |
| ----- | ----------- | ----------- |
| value | `SafeValue` |             |

```ts
function unwrapSafeValue<T>(value: T): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L99-L99)

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |
