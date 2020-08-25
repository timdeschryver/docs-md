---
kind: FunctionDeclaration
name: ɵɵpureFunction0
module: core
---

# ɵɵpureFunction0

## description

Bindings for pure functions are stored after regular bindings.

## |-------decls------|---------vars---------| |----- hostVars (dir1) ------|

## | nodes/refs/pipes | bindings | fn slots | injector | dir1 | host bindings | host slots |

^ ^
TView.bindingStartIndex TView.expandoStartIndex

Pure function instructions are given an offset from the binding root. Adding the offset to the
binding root gives the first index where the bindings are stored. In component views, the binding
root is the bindingStartIndex. In host bindings, the binding root is the expandoStartIndex +
any directive instances + any hostVars in directives evaluated before it.

See VIEW_DATA.md for more information about host binding resolution.

If the value hasn't been saved, calls the pure function to store and return the
value. If it has been saved, returns the saved value.

```ts
function ɵɵpureFunction0<T>(
  slotOffset: number,
  pureFn: () => T,
  thisArg?: any
): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/pure_function.ts#L45-L51)

## Parameters

| Name       | Type      | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| slotOffset | `number`  | the offset from binding root to the reserved slot |
| pureFn     | `() => T` | Function that returns a value                     |
| thisArg    | `any`     | Optional calling context of pureFn                |

## returns

value

## codeGenApi
