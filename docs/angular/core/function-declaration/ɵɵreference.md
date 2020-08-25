---
kind: FunctionDeclaration
name: ɵɵreference
module: core
---

# ɵɵreference

## description

Retrieves a local reference from the current contextViewData.

If the reference to retrieve is in a parent view, this instruction is used in conjunction
with a nextContext() call, which walks up the tree and updates the contextViewData instance.

```ts
function ɵɵreference<T>(index: number);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/storage.ts#L35-L38)

## Parameters

| Name  | Type     | Description                                    |
| ----- | -------- | ---------------------------------------------- |
| index | `number` | The index of the local ref in contextViewData. |

## codeGenApi
