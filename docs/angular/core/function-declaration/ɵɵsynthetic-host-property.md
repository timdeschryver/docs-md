---
kind: FunctionDeclaration
name: ɵɵsyntheticHostProperty
module: core
---

# ɵɵsyntheticHostProperty

## description

Updates a synthetic host binding (e.g. `[@foo]`) on a component or directive.

This instruction is for compatibility purposes and is designed to ensure that a
synthetic host binding (e.g. `@HostBinding('@foo')`) properly gets rendered in
the component's renderer. Normally all host bindings are evaluated with the parent
component's renderer, but, in the case of animation @triggers, they need to be
evaluated with the sub component's renderer (because that's where the animation
triggers are defined).

Do not use this instruction as a replacement for `elementProperty`. This instruction
only exists to ensure compatibility with the ViewEngine's host binding behavior.

```ts
function ɵɵsyntheticHostProperty<T>(
  propName: string,
  value: T | NO_CHANGE,
  sanitizer?: SanitizerFn | null
): typeof ɵɵsyntheticHostProperty;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/host_property.ts#L65-L79)

## Parameters

| Name      | Type          | Description                                                          |
| --------- | ------------- | -------------------------------------------------------------------- |
| index     | ``            | The index of the element to update in the data array                 |
| propName  | `string`      | Name of property. Because it is going to DOM, this is not subject to |
| value     | `T            | NO_CHANGE`                                                           | New value to write. |
| sanitizer | `SanitizerFn` | An optional function used to sanitize the value.                     |

## codeGenApi
