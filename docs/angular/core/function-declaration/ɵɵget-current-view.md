---
kind: FunctionDeclaration
name: ɵɵgetCurrentView
module: core
---

# ɵɵgetCurrentView

## description

Returns the current OpaqueViewState instance.

Used in conjunction with the restoreView() instruction to save a snapshot
of the current view and restore it when listeners are invoked. This allows
walking the declaration view tree in listeners to get vars from parent views.

```ts
function ɵɵgetCurrentView(): OpaqueViewState;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/get_current_view.ts#L20-L22)

## codeGenApi
