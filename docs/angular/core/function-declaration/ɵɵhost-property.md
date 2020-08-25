---
kind: FunctionDeclaration
name: ɵɵhostProperty
module: core
---

# ɵɵhostProperty

## description

Update a property on a host element. Only applies to native node properties, not inputs.

Operates on the element selected by index via the {@link select} instruction.

```ts
function ɵɵhostProperty<T>(
  propName: string,
  value: T,
  sanitizer?: SanitizerFn | null
): typeof ɵɵhostProperty;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/host_property.ts#L30-L41)

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
