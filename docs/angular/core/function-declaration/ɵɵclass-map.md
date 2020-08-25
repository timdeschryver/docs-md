---
kind: FunctionDeclaration
name: ɵɵclassMap
module: core
---

# ɵɵclassMap

## description

Update class bindings using an object literal or class-string on an element.

This instruction is meant to apply styling via the `[class]="exp"` template bindings.
When classes are applied to the element they will then be updated with
respect to any styles/classes set via `classProp`. If any
classes are set to falsy then they will be removed from the element.

Note that the styling instruction will not be applied until `stylingApply` is called.
Note that this will the provided classMap value to the host element if this function is called
within a host binding.

```ts
function ɵɵclassMap(
  classes:
    | { [className: string]: boolean | undefined | null }
    | string
    | undefined
    | null
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/styling.ts#L136-L139)

## Parameters

| Name    | Type    | Description                        |
| ------- | ------- | ---------------------------------- |
| classes | `string | { [className: string]: boolean; }` | A key/value map or string of CSS classes that will be added to the |

## codeGenApi
