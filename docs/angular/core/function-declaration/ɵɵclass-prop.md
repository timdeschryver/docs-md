---
kind: FunctionDeclaration
name: ɵɵclassProp
module: core
---

# ɵɵclassProp

## description

Update a class binding on an element with the provided value.

This instruction is meant to handle the `[class.foo]="exp"` case and,
therefore, the class binding itself must already be allocated using
`styling` within the creation block.

```ts
function ɵɵclassProp(
  className: string,
  value: boolean | undefined | null
): typeof ɵɵclassProp;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/styling.ts#L72-L75)

## Parameters

| Name      | Type      | Description                                             |
| --------- | --------- | ------------------------------------------------------- |
| prop      | ``        | A valid CSS class (only one).                           |
| value     | `boolean` | A true/false value which will turn the class on or off. |
| className | `string`  |                                                         |

## codeGenApi
