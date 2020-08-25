---
kind: FunctionDeclaration
name: ɵɵpureFunction8
module: core
---

# ɵɵpureFunction8

## description

If the value of any provided exp has changed, calls the pure function to return
an updated value. Or if no values have changed, returns cached value.

```ts
function ɵɵpureFunction8(
  slotOffset: number,
  pureFn: (
    v1: any,
    v2: any,
    v3: any,
    v4: any,
    v5: any,
    v6: any,
    v7: any,
    v8: any
  ) => any,
  exp1: any,
  exp2: any,
  exp3: any,
  exp4: any,
  exp5: any,
  exp6: any,
  exp7: any,
  exp8: any,
  thisArg?: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pure_function.ts#L246-L260)

## Parameters

| Name       | Type                                                                              | Description                                       |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------- |
| slotOffset | `number`                                                                          | the offset from binding root to the reserved slot |
| pureFn     | `(v1: any, v2: any, v3: any, v4: any, v5: any, v6: any, v7: any, v8: any) => any` |                                                   |
| exp1       | `any`                                                                             |                                                   |
| exp2       | `any`                                                                             |                                                   |
| exp3       | `any`                                                                             |                                                   |
| exp4       | `any`                                                                             |                                                   |
| exp5       | `any`                                                                             |                                                   |
| exp6       | `any`                                                                             |                                                   |
| exp7       | `any`                                                                             |                                                   |
| exp8       | `any`                                                                             |                                                   |
| thisArg    | `any`                                                                             | Optional calling context of pureFn                |

## returns

Updated or cached value

## codeGenApi
