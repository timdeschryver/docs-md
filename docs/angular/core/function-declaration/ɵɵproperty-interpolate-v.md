---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolateV
module: core
---

# ɵɵpropertyInterpolateV

## description

Update an interpolated property on an element with 9 or more bound values surrounded by text.

Used when the number of interpolated values exceeds 8.

```html
<div
  title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}-{{v8}}-{{v9}}suffix"
></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolateV("title", [
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

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolateV(
  propName: string,
  values: any[],
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolateV;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L515-L535)

## Parameters

| Name      | Type          | Description                                                                       |
| --------- | ------------- | --------------------------------------------------------------------------------- |
| propName  | `string`      | The name of the property to update.                                               |
| values    | `any[]`       | The collection of values and the strings inbetween those values, beginning with a |
| sanitizer | `SanitizerFn` | An optional sanitizer function                                                    |

## returns

itself, so that it may be chained.

## codeGenApi
