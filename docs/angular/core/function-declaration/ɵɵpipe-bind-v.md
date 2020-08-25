---
kind: FunctionDeclaration
name: ɵɵpipeBindV
module: core
---

# ɵɵpipeBindV

## description

Invokes a pipe with variable number of arguments.

This instruction acts as a guard to {@link PipeTransform#transform} invoking
the pipe only when an input to the pipe changes.

```ts
function ɵɵpipeBindV(
  index: number,
  slotOffset: number,
  values: [any, ...any[]]
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pipe.ts#L193-L202)

## Parameters

| Name       | Type              | Description                                                           |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| index      | `number`          | Pipe index where the pipe was stored on creation.                     |
| slotOffset | `number`          | the offset in the reserved slot space                                 |
| values     | `[any, ...any[]]` | Array of arguments to pass to {@link PipeTransform#transform} method. |

## codeGenApi
