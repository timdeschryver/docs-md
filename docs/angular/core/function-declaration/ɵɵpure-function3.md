---
kind: FunctionDeclaration
name: ɵɵpureFunction3
module: core
---

# ɵɵpureFunction3

## description

If the value of any provided exp has changed, calls the pure function to return
an updated value. Or if no values have changed, returns cached value.

```ts
function ɵɵpureFunction3(
  slotOffset: number,
  pureFn: (v1: any, v2: any, v3: any) => any,
  exp1: any,
  exp2: any,
  exp3: any,
  thisArg?: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pure_function.ts#L104-L109)

## Parameters

| Name       | Type                                 | Description                                       |
| ---------- | ------------------------------------ | ------------------------------------------------- |
| slotOffset | `number`                             | the offset from binding root to the reserved slot |
| pureFn     | `(v1: any, v2: any, v3: any) => any` |                                                   |
| exp1       | `any`                                |                                                   |
| exp2       | `any`                                |                                                   |
| exp3       | `any`                                |                                                   |
| thisArg    | `any`                                | Optional calling context of pureFn                |

## returns

Updated or cached value

## codeGenApi
