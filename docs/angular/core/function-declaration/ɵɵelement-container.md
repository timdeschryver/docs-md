---
kind: FunctionDeclaration
name: ɵɵelementContainer
module: core
---

# ɵɵelementContainer

## description

Creates an empty logical container using {@link elementContainerStart}
and {@link elementContainerEnd}

```ts
function ɵɵelementContainer(
  index: number,
  attrsIndex?: number | null,
  localRefsIndex?: number
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/element_container.ts#L132-L136)

## Parameters

| Name           | Type     | Description                                                      |
| -------------- | -------- | ---------------------------------------------------------------- |
| index          | `number` | Index of the element in the LView array                          |
| attrsIndex     | `number` | Index of the container attributes in the `consts` array.         |
| localRefsIndex | `number` | Index of the container's local references in the `consts` array. |

## codeGenApi
