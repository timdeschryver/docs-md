---
kind: FunctionDeclaration
name: ɵɵstylePropInterpolate1
module: core
---

# ɵɵstylePropInterpolate1

## description

Update an interpolated style property on an element with single bound value surrounded by text.

Used when the value passed to a property has 1 interpolated value in it:

```html
<div style.color="prefix{{v0}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstylePropInterpolate1(0, "prefix", v0, "suffix");
```

```ts
function ɵɵstylePropInterpolate1(
  prop: string,
  prefix: string,
  v0: any,
  suffix: string,
  valueSuffix?: string | null
): typeof ɵɵstylePropInterpolate1;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_prop_interpolation.ts#L40-L47)

## Parameters

| Name        | Type     | Description                                                        |
| ----------- | -------- | ------------------------------------------------------------------ |
| styleIndex  | ``       | Index of style to update. This index value refers to the           |
| prefix      | `string` | Static value used for concatenation only.                          |
| v0          | `any`    | Value checked for change.                                          |
| suffix      | `string` | Static value used for concatenation only.                          |
| valueSuffix | `string` | Optional suffix. Used with scalar values to add unit such as `px`. |
| prop        | `string` |                                                                    |

## returns

itself, so that it may be chained.

## codeGenApi
