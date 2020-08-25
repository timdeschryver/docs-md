---
kind: FunctionDeclaration
name: ɵɵpipeBind1
module: core
---

# ɵɵpipeBind1

## description

Invokes a pipe with 1 arguments.

This instruction acts as a guard to {@link PipeTransform#transform} invoking
the pipe only when an input to the pipe changes.

```ts
function ɵɵpipeBind1(index: number, slotOffset: number, v1: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pipe.ts#L94-L103)

## Parameters

| Name       | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| index      | `number` | Pipe index where the pipe was stored on creation. |
| slotOffset | `number` | the offset in the reserved slot space             |
| v1         | `any`    | 1st argument to {@link PipeTransform#transform}.  |

## codeGenApi
