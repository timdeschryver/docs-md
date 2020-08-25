---
kind: FunctionDeclaration
name: ɵɵpropertyInterpolate
module: core
---

# ɵɵpropertyInterpolate

## description

Update an interpolated property on an element with a lone bound value

Used when the value passed to a property has 1 interpolated value in it, an no additional text
surrounds that interpolated value:

```html
<div title="{{v0}}"></div>
```

Its compiled representation is::

```ts
ɵɵpropertyInterpolate("title", v0);
```

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled.

```ts
function ɵɵpropertyInterpolate(
  propName: string,
  v0: any,
  sanitizer?: SanitizerFn
): typeof ɵɵpropertyInterpolate;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property_interpolation.ts#L46-L50)

## Parameters

| Name      | Type          | Description                               |
| --------- | ------------- | ----------------------------------------- |
| propName  | `string`      | The name of the property to update        |
| prefix    | ``            | Static value used for concatenation only. |
| v0        | `any`         | Value checked for change.                 |
| suffix    | ``            | Static value used for concatenation only. |
| sanitizer | `SanitizerFn` | An optional sanitizer function            |

## returns

itself, so that it may be chained.

## codeGenApi
