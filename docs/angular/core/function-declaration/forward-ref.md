---
kind: FunctionDeclaration
name: forwardRef
module: core
---

# forwardRef

## description

Allows to refer to references which are not yet defined.

For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
DI is declared, but not yet defined. It is also used when the `token` which we use when creating
a query is not yet defined.

```ts
function forwardRef(forwardRefFn: ForwardRefFn): Type<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/forward_ref.ts#L42-L48)

## usageNotes

### Example

{@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}

## publicApi

## Parameters

| Name         | Type           | Description |
| ------------ | -------------- | ----------- |
| forwardRefFn | `ForwardRefFn` |             |
