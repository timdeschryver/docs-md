---
kind: InterfaceDeclaration
name: AfterContentInit
module: core
---

# AfterContentInit

## description

A lifecycle hook that is called after Angular has fully initialized
all content of a directive.
Define an `ngAfterContentInit()` method to handle any additional initialization tasks.

```ts
interface AfterContentInit {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L145-L153)

## see

`OnInit`
`AfterViewInit`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define its own content initialization method.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterContentInit'}

## publicApi
