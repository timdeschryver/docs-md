---
kind: FunctionDeclaration
name: ɵɵclassMapInterpolateV
module: core
---

# ɵɵclassMapInterpolateV

## description

Update an interpolated class on an element with 9 or more bound values surrounded by text.

Used when the number of interpolated values exceeds 8.

```html
<div
  class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"
></div>
```

Its compiled representation is:

```ts
ɵɵclassMapInterpolateV([
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
function ɵɵclassMapInterpolateV(values: any[]): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/class_map_interpolation.ts#L334-L338)

## Parameters

| Name   | Type    | Description                                                                      |
| ------ | ------- | -------------------------------------------------------------------------------- |
| values | `any[]` | The collection of values and the strings in-between those values, beginning with |

## codeGenApi
