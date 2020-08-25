---
kind: FunctionDeclaration
name: ɵɵpipeBind2
module: core
---

# ɵɵpipeBind2

## description

Invokes a pipe with 2 arguments.

This instruction acts as a guard to {@link PipeTransform#transform} invoking
the pipe only when an input to the pipe changes.

```ts
function ɵɵpipeBind2(index: number, slotOffset: number, v1: any, v2: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pipe.ts#L118-L127)

## Parameters

| Name       | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| index      | `number` | Pipe index where the pipe was stored on creation. |
| slotOffset | `number` | the offset in the reserved slot space             |
| v1         | `any`    | 1st argument to {@link PipeTransform#transform}.  |
| v2         | `any`    | 2nd argument to {@link PipeTransform#transform}.  |

## codeGenApi
