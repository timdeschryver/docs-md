---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolate1
module: core
---

# ɵɵpropertyInterpolate1

## description

Update an interpolated property on an element with single bound value surrounded by text.

Used when the value passed to a property has 1 interpolated value in it:

```html
<div title="prefix{{v0}}suffix"></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolate1("title", "prefix", v0, "suffix");
```

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolate1(
  propName: string,
  prefix: string,
  v0: any,
  suffix: string,
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolate1;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L81-L96)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| propName  | `string`      | The name of the property to update        |
| prefix    | `string`      | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| suffix    | `string`      | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |

## returns

itself, so that it may be chained.

## codeGenApi
