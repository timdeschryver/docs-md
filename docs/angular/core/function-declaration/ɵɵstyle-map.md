---
kind: FunctionDeclaration
name: ɵɵstyleMap
module: core
---

# ɵɵstyleMap

## description

Update style bindings using an object literal on an element.

This instruction is meant to apply styling via the `[style]="exp"` template bindings.
When styles are applied to the element they will then be updated with respect to
any styles/classes set via `styleProp`. If any styles are set to falsy
then they will be removed from the element.

Note that the styling instruction will not be applied until `stylingApply` is called.

```ts
function ɵɵstyleMap(
  styles: { [styleName: string]: any } | string | undefined | null
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/styling.ts#L97-L99)

## Parameters

| Name   | Type    | Description                    |
| ------ | ------- | ------------------------------ |
| styles | `string | { [styleName: string]: any; }` | A key/value style map of the styles that will be applied to the given element. |

## codeGenApi
