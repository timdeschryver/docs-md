---
kind: FunctionDeclaration
name: ɵɵattributeInterpolate1
module: core
---

# ɵɵattributeInterpolate1

## description

Update an interpolated attribute on an element with single bound value surrounded by text.

Used when the value passed to a property has 1 interpolated value in it:

```html
<div attr.title="prefix{{v0}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵattributeInterpolate1("title", "prefix", v0, "suffix");
```

```ts
function ɵɵattributeInterpolate1(
  attrName: string,
  prefix: string,
  v0: any,
  suffix: string,
  sanitizer?: SanitizerFn,
  namespace?: string
): typeof ɵɵattributeInterpolate1;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/attribute_interpolation.ts#L40-L53)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| attrName  | `string`      | The name of the attribute to update       |
| prefix    | `string`      | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |
| namespace | `string`      |                                           |

## returns

itself, so that it may be chained.

## codeGenApi
