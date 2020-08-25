---
kind: InterfaceDeclaration
name: OnInit
module: core
---

# OnInit

## description

A lifecycle hook that is called after Angular has initialized
all data-bound properties of a directive.
Define an `ngOnInit()` method to handle any additional initialization tasks.

```ts
interface OnInit {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L56-L65)

## see

`AfterContentInit`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface to
define its own initialization method.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='OnInit'}

## publicApi
