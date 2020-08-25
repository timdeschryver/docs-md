---
kind: FunctionDeclaration
name: ɵɵproperty
module: core
---

# ɵɵproperty

## description

Update a property on a selected element.

Operates on the element selected by index via the {@link select} instruction.

If the property name also exists as an input property on one of the element's directives,
the component property will be set instead of the element property. This check must
be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled

```ts
function ɵɵproperty<T>(
  propName: string,
  value: T,
  sanitizer?: SanitizerFn | null
): typeof ɵɵproperty;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/property.ts#L35-L47)

## Parameters

| Name      | Type          | Description                                                          |
| --------- | ------------- | -------------------------------------------------------------------- |
| propName  | `string`      | Name of property. Because it is going to DOM, this is not subject to |
| value     | `T`           | New value to write.                                                  |
| sanitizer | `SanitizerFn` | An optional function used to sanitize the value.                     |

## returns

This function returns itself so that it may be chained
(e.g. `property('name', ctx.name)('title', ctx.title)`)

## codeGenApi
