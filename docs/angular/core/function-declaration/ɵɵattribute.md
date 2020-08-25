---
kind: FunctionDeclaration
name: ɵɵattribute
module: core
---

# ɵɵattribute

## description

Updates the value of or removes a bound attribute on an Element.

Used in the case of `[attr.title]="value"`

```ts
function ɵɵattribute(
  name: string,
  value: any,
  sanitizer?: SanitizerFn | null,
  namespace?: string
): typeof ɵɵattribute;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/attribute.ts#L28-L40)

## Parameters

| Name      | Type          | Description                                                         |
| --------- | ------------- | ------------------------------------------------------------------- |
| name      | `string`      | name The name of the attribute.                                     |
| value     | `any`         | value The attribute is removed when value is `null` or `undefined`. |
| sanitizer | `SanitizerFn` | An optional function used to sanitize the value.                    |
| namespace | `string`      | Optional namespace to use when setting the attribute.               |

## codeGenApi
