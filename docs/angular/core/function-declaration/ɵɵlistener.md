---
kind: FunctionDeclaration
name: ɵɵlistener
module: core
---

# ɵɵlistener

## description

Adds an event listener to the current node.

If an output exists on one of the node's directives, it also subscribes to the output
and saves the subscription for later cleanup.

```ts
function ɵɵlistener(
  eventName: string,
  listenerFn: (e?: any) => any,
  useCapture = false,
  eventTargetResolver?: GlobalTargetResolver
): typeof ɵɵlistener;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/listener.ts#L39-L48)

## Parameters

| Name                | Type                   | Description                                                           |
| ------------------- | ---------------------- | --------------------------------------------------------------------- |
| eventName           | `string`               | Name of the event                                                     |
| listenerFn          | `(e?: any) => any`     | The function to be called when event emits                            |
| useCapture          | `boolean`              | Whether or not to use capture in event listener                       |
| eventTargetResolver | `GlobalTargetResolver` | Function that returns global target information in case this listener |

## codeGenApi
