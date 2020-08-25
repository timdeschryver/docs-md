---
kind: FunctionDeclaration
name: ɵɵrestoreView
module: core
---

# ɵɵrestoreView

## description

Restores `contextViewData` to the given OpaqueViewState instance.

Used in conjunction with the getCurrentView() instruction to save a snapshot
of the current view and restore it when listeners are invoked. This allows
walking the declaration view tree in listeners to get vars from parent views.

```ts
function ɵɵrestoreView(viewToRestore: OpaqueViewState);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/state.ts#L261-L263)

## Parameters

| Name          | Type              | Description                              |
| ------------- | ----------------- | ---------------------------------------- |
| viewToRestore | `OpaqueViewState` | The OpaqueViewState instance to restore. |

## codeGenApi
