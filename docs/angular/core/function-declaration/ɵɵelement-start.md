---
kind: FunctionDeclaration
name: ɵɵelementStart
module: core
---

# ɵɵelementStart

## description

Create DOM element. The instruction must later be followed by `elementEnd()` call.

```ts
function ɵɵelementStart(
  index: number,
  name: string,
  attrsIndex?: number | null,
  localRefsIndex?: number
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/element.ts#L71-L123)

## Parameters

| Name           | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| index          | `number` | Index of the element in the LView array                        |
| name           | `string` | Name of the DOM Node                                           |
| attrsIndex     | `number` | Index of the element's attributes in the `consts` array.       |
| localRefsIndex | `number` | Index of the element's local references in the `consts` array. |

## codeGenApi
