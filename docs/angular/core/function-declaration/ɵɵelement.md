---
kind: FunctionDeclaration
name: ɵɵelement
module: core
---

# ɵɵelement

## description

Creates an empty element using {@link elementStart} and {@link elementEnd}

```ts
function ɵɵelement(
  index: number,
  name: string,
  attrsIndex?: number | null,
  localRefsIndex?: number
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/element.ts#L174-L178)

## Parameters

| Name           | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| index          | `number` | Index of the element in the data array                         |
| name           | `string` | Name of the DOM Node                                           |
| attrsIndex     | `number` | Index of the element's attributes in the `consts` array.       |
| localRefsIndex | `number` | Index of the element's local references in the `consts` array. |

## codeGenApi
