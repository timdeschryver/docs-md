---
kind: FunctionDeclaration
name: ɵɵpureFunction1
module: core
---

# ɵɵpureFunction1

## description

If the value of the provided exp has changed, calls the pure function to return
an updated value. Or if the value has not changed, returns cached value.

```ts
function ɵɵpureFunction1(
  slotOffset: number,
  pureFn: (v: any) => any,
  exp: any,
  thisArg?: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pure_function.ts#L65-L68)

## Parameters

| Name       | Type              | Description                                       |
| ---------- | ----------------- | ------------------------------------------------- |
| slotOffset | `number`          | the offset from binding root to the reserved slot |
| pureFn     | `(v: any) => any` | Function that returns an updated value            |
| exp        | `any`             | Updated expression value                          |
| thisArg    | `any`             | Optional calling context of pureFn                |

## returns

Updated or cached value

## codeGenApi
