---
kind: InterfaceDeclaration
name: AfterViewChecked
module: core
---

# AfterViewChecked

## description

A lifecycle hook that is called after the default change detector has
completed checking a component's view for changes.

```ts
interface AfterViewChecked {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L224-L231)

## see

`AfterContentChecked`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define its own after-check functionality.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewChecked'}

## publicApi
