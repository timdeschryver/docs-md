---
kind: FunctionDeclaration
name: ɵwhenRendered
module: core
---

# ɵwhenRendered

## description

Wait on component until it is rendered.

This function returns a `Promise` which is resolved when the component's
change detection is executed. This is determined by finding the scheduler
associated with the `component`'s render tree and waiting until the scheduler
flushes. If nothing is scheduled, the function returns a resolved promise.

Example:

```
await whenRendered(myComponent);
```

```ts
function whenRendered(component: any): Promise<null>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component.ts#L298-L300)

## Parameters

| Name      | Type  | Description            |
| --------- | ----- | ---------------------- |
| component | `any` | Component to wait upon |

## returns

Promise which resolves when the component is rendered.
