---
kind: FunctionDeclaration
name: ɵɵpipeBind4
module: core
---

# ɵɵpipeBind4

## description

Invokes a pipe with 4 arguments.

This instruction acts as a guard to {@link PipeTransform#transform} invoking
the pipe only when an input to the pipe changes.

```ts
function ɵɵpipeBind4(
  index: number,
  slotOffset: number,
  v1: any,
  v2: any,
  v3: any,
  v4: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pipe.ts#L169-L179)

## Parameters

| Name       | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| index      | `number` | Pipe index where the pipe was stored on creation. |
| slotOffset | `number` | the offset in the reserved slot space             |
| v1         | `any`    | 1st argument to {@link PipeTransform#transform}.  |
| v2         | `any`    | 2nd argument to {@link PipeTransform#transform}.  |
| v3         | `any`    | 3rd argument to {@link PipeTransform#transform}.  |
| v4         | `any`    | 4th argument to {@link PipeTransform#transform}.  |

## codeGenApi
