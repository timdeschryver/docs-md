---
kind: FunctionDeclaration
name: ɵɵstyleProp
module: core
---

# ɵɵstyleProp

## description

Update a style binding on an element with the provided value.

If the style value is falsy then it will be removed from the element
(or assigned a different value depending if there are any styles placed
on the element with `styleMap` or any static styles that are
present from when the element was created with `styling`).

Note that the styling element is updated as part of `stylingApply`.

```ts
function ɵɵstyleProp(
  prop: string,
  value: string | number | SafeValue | undefined | null,
  suffix?: string | null
): typeof ɵɵstyleProp;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/styling.ts#L50-L55)

## Parameters

| Name   | Type     | Description                                                        |
| ------ | -------- | ------------------------------------------------------------------ |
| prop   | `string` | A valid CSS property.                                              |
| value  | `string  | number                                                             | SafeValue` | New value to write (`null` or an empty string to remove). |
| suffix | `string` | Optional suffix. Used with scalar values to add unit such as `px`. |

## codeGenApi
