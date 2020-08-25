---
kind: InterfaceDeclaration
name: DoCheck
module: core
---

# DoCheck

## description

A lifecycle hook that invokes a custom change-detection function for a directive,
in addition to the check performed by the default change-detector.

The default change-detection algorithm looks for differences by comparing
bound-property values by reference across change detection runs. You can use this
hook to check for and respond to changes by some other means.

When the default change detector detects changes, it invokes `ngOnChanges()` if supplied,
regardless of whether you perform additional change detection.
Typically, you should not use both `DoCheck` and `OnChanges` to respond to
changes on the same input.

```ts
interface DoCheck {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/interface/lifecycle_hooks.ts#L94-L103)

## see

`OnChanges`
[Lifecycle hooks guide](guide/lifecycle-hooks)

## usageNotes

The following snippet shows how a component can implement this interface
to invoke it own change-detection cycle.

{@example core/ts/metadata/lifecycle_hooks_spec.ts region='DoCheck'}

For a more complete example and discussion, see
[Defining custom change detection](guide/lifecycle-hooks#defining-custom-change-detection).

## publicApi
