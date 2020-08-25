---
kind: FunctionDeclaration
name: ɵmarkDirty
module: core
---

# ɵmarkDirty

## description

Marks the component as dirty (needing change detection). Marking a component dirty will
schedule a change detection on it at some point in the future.

Marking an already dirty component as dirty won't do anything. Only one outstanding change
detection can be scheduled per component tree.

```ts
function markDirty(component: {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/change_detection.ts#L36-L42)

## Parameters

| Name      | Type | Description                 |
| --------- | ---- | --------------------------- |
| component | `{}` | Component to mark as dirty. |
