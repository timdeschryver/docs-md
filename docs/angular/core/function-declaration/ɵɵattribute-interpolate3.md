---
kind: FunctionDeclaration
name: ɵɵattributeInterpolate3
module: core
---

# ɵɵattributeInterpolate3

## description

Update an interpolated attribute on an element with 3 bound values surrounded by text.

Used when the value passed to a property has 3 interpolated values in it:

```html
<div attr.title="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵattributeInterpolate3("title", "prefix", v0, "-", v1, "-", v2, "suffix");
```

```ts
function ɵɵattributeInterpolate3(
  attrName: string,
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  suffix: string,
  sanitizer?: SanitizerFn,
  namespace?: string
): typeof ɵɵattributeInterpolate3;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/attribute_interpolation.ts#L125-L139)

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
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |
| namespace | `string`      |                                           |

## returns

itself, so that it may be chained.

## codeGenApi
