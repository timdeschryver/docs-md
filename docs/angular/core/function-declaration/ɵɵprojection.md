---
kind: FunctionDeclaration
name: ɵɵprojection
module: core
---

# ɵɵprojection

## description

Inserts previously re-distributed projected nodes. This instruction must be preceded by a call
to the projectionDef instruction.

```ts
function ɵɵprojection(
  nodeIndex: number,
  selectorIndex: number = 0,
  attrs?: TAttributes
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/projection.ts#L123-L141)

## Parameters

| Name           | Type          | Description |
| -------------- | ------------- | ----------- |
| nodeIndex      | `number`      |             |
| selectorIndex: | ``            |             |
| selectorIndex  | `number`      |             |
| attrs          | `TAttributes` |             |

## codeGenApi
