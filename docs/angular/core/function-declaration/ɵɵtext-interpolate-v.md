---
kind: FunctionDeclaration
name: ɵɵtextInterpolateV
module: core
---

# ɵɵtextInterpolateV

## description

Update text content with 9 or more bound values other surrounded by text.

Used when the number of interpolated values exceeds 8.

```html
<div>
  prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix
</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolateV([
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
function ɵɵtextInterpolateV(values: any[]): typeof ɵɵtextInterpolateV;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L316-L323)

## Parameters

| Name   | Type    | Description                                                                      |
| ------ | ------- | -------------------------------------------------------------------------------- |
| values | `any[]` | The collection of values and the strings in between those values, beginning with |

## returns

itself, so that it may be chained.

## codeGenApi
