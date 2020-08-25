---
kind: FunctionDeclaration
name: resolveForwardRef
module: core
---

# resolveForwardRef

## description

Lazily retrieves the reference value from a forwardRef.

Acts as the identity function when given a non-forward-ref value.

```ts
function resolveForwardRef<T>(type: T): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/forward_ref.ts#L63-L65)

## usageNotes

### Example

{@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}

## see

`forwardRef`

## publicApi

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| type | `T`  |             |
