---
kind: FunctionDeclaration
name: ɵɵattributeInterpolateV
module: core
---

# ɵɵattributeInterpolateV

## description

Update an interpolated attribute on an element with 9 or more bound values surrounded by text.

Used when the number of interpolated values exceeds 8.

```html
<div
  title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"
></div>
```

Its compiled representation is::

```ts
ɵɵattributeInterpolateV("title", [
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
function ɵɵattributeInterpolateV(
  attrName: string,
  values: any[],
  sanitizer?: SanitizerFn,
  namespace?: string
): typeof ɵɵattributeInterpolateV;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/attribute_interpolation.ts#L431-L450)

## Parameters

| Name      | Type          | Description                                                                      |
| --------- | ------------- | -------------------------------------------------------------------------------- |
| attrName  | `string`      | The name of the attribute to update.                                             |
| values    | `any[]`       | The collection of values and the strings in-between those values, beginning with |
| sanitizer | `SanitizerFn` | An optional sanitizer function                                                   |
| namespace | `string`      |                                                                                  |

## returns

itself, so that it may be chained.

## codeGenApi
