---
kind: InterfaceDeclaration
name: OnDestroy
module: core
---

# OnDestroy

## description

A lifecycle hook that is called when a directive, pipe, or service is destroyed.
Use for any custom cleanup that needs to occur when the
instance is destroyed.

```ts
interface OnDestroy {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L119-L125)

## see

[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface
to define its own custom clean-up method.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnDestroy'}

## publicApi
