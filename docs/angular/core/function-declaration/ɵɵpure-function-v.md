---
kind: FunctionDeclaration
name: ɵɵpureFunctionV
module: core
---

# ɵɵpureFunctionV

## description

pureFunction instruction that can support any number of bindings.

If the value of any provided exp has changed, calls the pure function to return
an updated value. Or if no values have changed, returns cached value.

```ts
function ɵɵpureFunctionV(
  slotOffset: number,
  pureFn: (...v: any[]) => any,
  exps: any[],
  thisArg?: any
): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pure_function.ts#L277-L280)

## Parameters

| Name       | Type                   | Description                                                             |
| ---------- | ---------------------- | ----------------------------------------------------------------------- |
| slotOffset | `number`               | the offset from binding root to the reserved slot                       |
| pureFn     | `(...v: any[]) => any` | A pure function that takes binding values and builds an object or array |
| exps       | `any[]`                | An array of binding values                                              |
| thisArg    | `any`                  | Optional calling context of pureFn                                      |

## returns

Updated or cached value

## codeGenApi
