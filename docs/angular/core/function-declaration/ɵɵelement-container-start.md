---
kind: FunctionDeclaration
name: ɵɵelementContainerStart
module: core
---

# ɵɵelementContainerStart

## description

Creates a logical container for other nodes (<ng-container>) backed by a comment node in the DOM.
The instruction must later be followed by `elementContainerEnd()` call.

```ts
function ɵɵelementContainerStart(
  index: number,
  attrsIndex?: number | null,
  localRefsIndex?: number
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/element_container.ts#L63-L94)

## Parameters

| Name           | Type     | Description                                                      |
| -------------- | -------- | ---------------------------------------------------------------- |
| index          | `number` | Index of the element in the LView array                          |
| attrsIndex     | `number` | Index of the container attributes in the `consts` array.         |
| localRefsIndex | `number` | Index of the container's local references in the `consts` array. |

## codeGenApi
