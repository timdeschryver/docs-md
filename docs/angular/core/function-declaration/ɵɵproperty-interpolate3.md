---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolate3
module: core
---

# ɵɵpropertyInterpolate3

## description

Update an interpolated property on an element with 3 bound values surrounded by text.

Used when the value passed to a property has 3 interpolated values in it:

```html
<div title="prefix{{v0}}-{{v1}}-{{v2}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolate3("title", "prefix", v0, "-", v1, "-", v2, "suffix");
```

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolate3(
  propName: string,
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  suffix: string,
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolate3;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L178-L193)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| propName  | `string`      | The name of the property to update        |
| prefix    | `string`      | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| i0        | `string`      | Static value used for concatenation only. |
| v1        | `any`         | Value checked for change.                 |
| i1        | `string`      | Static value used for concatenation only. |
| v2        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |

## returns

itself, so that it may be chained.

## codeGenApi
