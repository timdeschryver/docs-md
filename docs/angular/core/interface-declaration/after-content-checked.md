---
kind: InterfaceDeclaration
name: AfterContentChecked
module: core
---

# AfterContentChecked

## description

A lifecycle hook that is called after the default change detector has
completed checking all content of a directive.

```ts
interface AfterContentChecked {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L171-L178)

## see

`AfterViewChecked`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define its own after-check functionality.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentChecked'}

## publicApi
