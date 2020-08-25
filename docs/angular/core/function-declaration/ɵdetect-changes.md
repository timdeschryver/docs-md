---
kind: FunctionDeclaration
name: ɵdetectChanges
module: core
---

# ɵdetectChanges

## description

Synchronously perform change detection on a component (and possibly its sub-components).

This function triggers change detection in a synchronous way on a component.

```ts
function detectChanges(component: {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/change_detection.ts#L22-L25)

## Parameters

| Name      | Type | Description                                                      |
| --------- | ---- | ---------------------------------------------------------------- |
| component | `{}` | The component which the change detection should be performed on. |
