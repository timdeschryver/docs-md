---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolate7
module: core
---

# ɵɵpropertyInterpolate7

## description

Update an interpolated property on an element with 7 bound values surrounded by text.

Used when the value passed to a property has 7 interpolated values in it:

```html
<div title="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolate7(
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
  "-",
  v6,
  "suffix"
);
```

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolate7(
  propName: string,
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
  i5: string,
  v6: any,
  suffix: string,
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolate7;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L402-L420)

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
| i2        | `string`      | Static value used for concatenation only. |
| v3        | `any`         | Value checked for change.                 |
| i3        | `string`      | Static value used for concatenation only. |
| v4        | `any`         | Value checked for change.                 |
| i4        | `string`      | Static value used for concatenation only. |
| v5        | `any`         | Value checked for change.                 |
| i5        | `string`      | Static value used for concatenation only. |
| v6        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |

## returns

itself, so that it may be chained.

## codeGenApi
