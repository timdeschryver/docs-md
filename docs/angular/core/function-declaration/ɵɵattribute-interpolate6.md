---
kind: FunctionDeclaration
name: ɵɵattributeInterpolate6
module: core
---

# ɵɵattributeInterpolate6

## description

Update an interpolated attribute on an element with 6 bound values surrounded by text.

Used when the value passed to a property has 6 interpolated values in it:

```html
<div attr.title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵattributeInterpolate6(
  "title",
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
  "suffix"
);
```

```ts
function ɵɵattributeInterpolate6(
  attrName: string,
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
  i4: string,
  v5: any,
  suffix: string,
  sanitizer?: SanitizerFn,
  namespace?: string
): typeof ɵɵattributeInterpolate6;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/attribute_interpolation.ts#L275-L291)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| attrName  | `string`      | The name of the attribute to update       |
| prefix    | `string`      | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| i0        | `string`      | Static value used for concatenation only. |
| v1        | `any`         | Value checked for change.                 |
| i1        | `string`      | Static value used for concatenation only. |
| v2        | `any`         | Value checked for change.                 |
| i2        | `string`      | Static value used for concatenation only. |
| v3        | `any`         | Value checked for change.                 |
| i3        | `string`      | Static value used for concatenation only. |
| v4        | `any`         | Value checked for change.                 |
| i4        | `string`      | Static value used for concatenation only. |
| v5        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |
| namespace | `string`      |                                           |

## returns

itself, so that it may be chained.

## codeGenApi
