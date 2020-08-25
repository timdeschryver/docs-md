---
kind: FunctionDeclaration
name: ɵallowSanitizationBypassAndThrow
module: core
---

# ɵallowSanitizationBypassAndThrow

```ts
function allowSanitizationBypassAndThrow(value: any, type: BypassType): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L116-L125)

## Parameters

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `any`        |             |
| type  | `BypassType` |             |

## Overloads

```ts
function allowSanitizationBypassAndThrow(
  value: any,
  type: BypassType.Html
): value is SafeHtml;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L106-L107)

### Parameters

| Name  | Type              | Description |
| ----- | ----------------- | ----------- |
| value | `any`             |             |
| type  | `BypassType.Html` |             |

```ts
function allowSanitizationBypassAndThrow(
  value: any,
  type: BypassType.ResourceUrl
): value is SafeResourceUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L108-L109)

### Parameters

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| value | `any`                    |             |
| type  | `BypassType.ResourceUrl` |             |

```ts
function allowSanitizationBypassAndThrow(
  value: any,
  type: BypassType.Script
): value is SafeScript;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L110-L111)

### Parameters

| Name  | Type                | Description |
| ----- | ------------------- | ----------- |
| value | `any`               |             |
| type  | `BypassType.Script` |             |

```ts
function allowSanitizationBypassAndThrow(
  value: any,
  type: BypassType.Style
): value is SafeStyle;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L112-L113)

### Parameters

| Name  | Type               | Description |
| ----- | ------------------ | ----------- |
| value | `any`              |             |
| type  | `BypassType.Style` |             |

```ts
function allowSanitizationBypassAndThrow(
  value: any,
  type: BypassType.Url
): value is SafeUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L114-L114)

### Parameters

| Name  | Type             | Description |
| ----- | ---------------- | ----------- |
| value | `any`            |             |
| type  | `BypassType.Url` |             |

```ts
function allowSanitizationBypassAndThrow(value: any, type: BypassType): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L115-L115)

### Parameters

| Name  | Type         | Description |
| ----- | ------------ | ----------- |
| value | `any`        |             |
| type  | `BypassType` |             |
