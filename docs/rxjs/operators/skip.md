---
kind: FunctionDeclaration
name: skip
module: operators
---

# skip

## description

Returns an Observable that skips the first `count` items emitted by the source Observable.

![](skip.png)

```ts
function skip<T>(count: number): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/skip.ts#L16-L18)

## Parameters

| Name     | Type     | Description                                                                        |
| -------- | -------- | ---------------------------------------------------------------------------------- |
| {Number} | ``       | count - The number of times, items emitted by source Observable should be skipped. |
| count    | `number` |                                                                                    |

## return

{Observable} An Observable that skips values emitted by the source Observable.

## name

skip
