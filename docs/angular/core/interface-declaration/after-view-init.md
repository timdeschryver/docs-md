---
kind: InterfaceDeclaration
name: AfterViewInit
module: core
---

# AfterViewInit

## description

A lifecycle hook that is called after Angular has fully initialized
a component's view.
Define an `ngAfterViewInit()` method to handle any additional initialization tasks.

```ts
interface AfterViewInit {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L198-L206)

## see

`OnInit`
`AfterContentInit`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define its own view initialization method.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='AfterViewInit'}

## publicApi
