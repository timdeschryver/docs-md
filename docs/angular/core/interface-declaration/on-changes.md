---
kind: InterfaceDeclaration
name: OnChanges
module: core
---

# OnChanges

## description

A lifecycle hook that is called when any data-bound property of a directive changes.
Define an `ngOnChanges()` method to handle the changes.

```ts
interface OnChanges {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L28-L37)

## see

`DoCheck`
`OnInit`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define an on-changes handler for an input property.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnChanges'}

## publicApi
