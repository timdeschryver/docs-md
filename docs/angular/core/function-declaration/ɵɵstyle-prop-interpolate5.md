---
kind: FunctionDeclaration
name: ɵɵstylePropInterpolate5
module: core
---

# ɵɵstylePropInterpolate5

## description

Update an interpolated style property on an element with 5 bound values surrounded by text.

Used when the value passed to a property has 5 interpolated values in it:

```html
<div style.color="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstylePropInterpolate5(
  0,
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
  "suffix"
);
```

```ts
function ɵɵstylePropInterpolate5(
  prop: string,
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  i2: string,
  v3: any,
  i3: string,
  v4: any,
  suffix: string,
  valueSuffix?: string | null
): typeof ɵɵstylePropInterpolate5;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_prop_interpolation.ts#L200-L209)

## Parameters

| Name        | Type     | Description                                                        |
| ----------- | -------- | ------------------------------------------------------------------ |
| styleIndex  | ``       | Index of style to update. This index value refers to the           |
| prefix      | `string` | Static value used for concatenation only.                          |
| v0          | `any`    | Value checked for change.                                          |
| i0          | `string` | Static value used for concatenation only.                          |
| v1          | `any`    | Value checked for change.                                          |
| i1          | `string` | Static value used for concatenation only.                          |
| v2          | `any`    | Value checked for change.                                          |
| i2          | `string` | Static value used for concatenation only.                          |
| v3          | `any`    | Value checked for change.                                          |
| i3          | `string` | Static value used for concatenation only.                          |
| v4          | `any`    | Value checked for change.                                          |
| suffix      | `string` | Static value used for concatenation only.                          |
| valueSuffix | `string` | Optional suffix. Used with scalar values to add unit such as `px`. |
| prop        | `string` |                                                                    |

## returns

itself, so that it may be chained.

## codeGenApi
