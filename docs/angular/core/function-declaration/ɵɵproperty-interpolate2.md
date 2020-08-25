---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolate2
module: core
---

# ɵɵpropertyInterpolate2

## description

Update an interpolated property on an element with 2 bound values surrounded by text.

Used when the value passed to a property has 2 interpolated values in it:

```html
<div title="prefix{{v0}}-{{v1}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolate2("title", "prefix", v0, "-", v1, "suffix");
```

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolate2(
  propName: string,
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  suffix: string,
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolate2;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L128-L143)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| propName  | `string`      | The name of the property to update        |
| prefix    | `string`      | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| i0        | `string`      | Static value used for concatenation only. |
| v1        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |

## returns

itself, so that it may be chained.

## codeGenApi
