---
kind: FunctionDeclaration
name: ɵɵstylePropInterpolateV
module: core
---

# ɵɵstylePropInterpolateV

## description

Update an interpolated style property on an element with 9 or more bound values surrounded by
text.

Used when the number of interpolated values exceeds 8.

```html
<div
  style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"
></div>
```

Its compiled representation is:

```ts
ɵɵstylePropInterpolateV(0, [
  "prefix",
  v0,
  "-",
  v1,
  "-",
  v2,
  "-",
  v3,
  "-",
  v4,
  "-",
  v5,
  "-",
  v6,
  "-",
  v7,
  "-",
  v9,
  "suffix",
]);
```

```ts
function ɵɵstylePropInterpolateV(
  prop: string,
  values: any[],
  valueSuffix?: string | null
): typeof ɵɵstylePropInterpolateV;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_prop_interpolation.ts#L390-L396)

## Parameters

| Name        | Type     | Description                                                                      |
| ----------- | -------- | -------------------------------------------------------------------------------- |
| styleIndex  | ``       | Index of style to update. This index value refers to the                         |
| values      | `any[]`  | The collection of values and the strings in-between those values, beginning with |
| valueSuffix | `string` | Optional suffix. Used with scalar values to add unit such as `px`.               |
| prop        | `string` |                                                                                  |

## returns

itself, so that it may be chained.

## codeGenApi
