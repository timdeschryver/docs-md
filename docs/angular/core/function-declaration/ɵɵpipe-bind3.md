---
kind: FunctionDeclaration
name: ɵɵpipeBind3
module: core
---

# ɵɵpipeBind3

## description

Invokes a pipe with 3 arguments.

This instruction acts as a guard to {@link PipeTransform#transform} invoking
the pipe only when an input to the pipe changes.

```ts
function ɵɵpipeBind3(
  index: number,
  slotOffset: number,
  v1: any,
  v2: any,
  v3: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pipe.ts#L143-L152)

## Parameters

| Name       | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| index      | `number` | Pipe index where the pipe was stored on creation. |
| slotOffset | `number` | the offset in the reserved slot space             |
| v1         | `any`    | 1st argument to {@link PipeTransform#transform}.  |
| v2         | `any`    | 2nd argument to {@link PipeTransform#transform}.  |
| v3         | `any`    | 4rd argument to {@link PipeTransform#transform}.  |

## codeGenApi
