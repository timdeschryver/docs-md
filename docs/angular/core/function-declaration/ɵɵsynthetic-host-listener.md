---
kind: FunctionDeclaration
name: ɵɵsyntheticHostListener
module: core
---

# ɵɵsyntheticHostListener

## description

Registers a synthetic host listener (e.g. `(@foo.start)`) on a component or directive.

This instruction is for compatibility purposes and is designed to ensure that a
synthetic host listener (e.g. `@HostListener('@foo.start')`) properly gets rendered
in the component's renderer. Normally all host listeners are evaluated with the
parent component's renderer, but, in the case of animation @triggers, they need
to be evaluated with the sub component's renderer (because that's where the
animation triggers are defined).

Do not use this instruction as a replacement for `listener`. This instruction
only exists to ensure compatibility with the ViewEngine's host binding behavior.

```ts
function ɵɵsyntheticHostListener(
  eventName: string,
  listenerFn: (e?: any) => any,
  useCapture = false,
  eventTargetResolver?: GlobalTargetResolver
): typeof ɵɵsyntheticHostListener;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/listener.ts#L71-L82)

## Parameters

| Name                | Type                   | Description                                                           |
| ------------------- | ---------------------- | --------------------------------------------------------------------- |
| eventName           | `string`               | Name of the event                                                     |
| listenerFn          | `(e?: any) => any`     | The function to be called when event emits                            |
| useCapture          | `boolean`              | Whether or not to use capture in event listener                       |
| eventTargetResolver | `GlobalTargetResolver` | Function that returns global target information in case this listener |

## codeGenApi
