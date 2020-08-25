---
kind: ClassDeclaration
name: WrappedValue
module: core
---

# WrappedValue

## description

Indicates that the result of a {@link Pipe} transformation has changed even though the
reference has not changed.

Wrapped values are unwrapped automatically during the change detection, and the unwrapped value
is stored.

Example:

```
if (this._latestValue === this._latestReturnedValue) {
return this._latestReturnedValue;
} else {
this._latestReturnedValue = this._latestValue;
return WrappedValue.wrap(this._latestValue); // this will force update
}
```

```ts
class WrappedValue {
  wrapped: any;

  static wrap(value: any): WrappedValue;
  static unwrap(value: any): any;
  static isWrapped(value: any): value is WrappedValue;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/change_detection_util.ts#L48-L73)

## publicApi

## deprecated

from v10 stop using. (No replacement, deemed unnecessary.)

## Properties

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| wrapped | `any` |             |

## Methods

### wrap

```ts
static wrap(value: any): WrappedValue;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/change_detection_util.ts#L57-L59)

#### Parameters (#wrap-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### unwrap

#### description (#unwrap-description)

Returns the underlying value of a wrapped value.
Returns the given `value` when it is not wrapped.
/

```ts
static unwrap(value: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/change_detection_util.ts#L65-L67)

#### Parameters (#unwrap-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |

### isWrapped

```ts
static isWrapped(value: any): value is WrappedValue;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/change_detection_util.ts#L70-L72)

#### Parameters (#isWrapped-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | `any` |             |
