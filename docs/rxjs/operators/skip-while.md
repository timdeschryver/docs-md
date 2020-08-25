---
kind: FunctionDeclaration
name: skipWhile
module: operators
---

# skipWhile

## description

Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
true, but emits all further source items as soon as the condition becomes false.

![](skipWhile.png)

```ts
function skipWhile<T>(
  predicate: (value: T, index: number) => boolean
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/skipWhile.ts#L18-L20)

## Parameters

| Name       | Type                                   | Description                                                                  |
| ---------- | -------------------------------------- | ---------------------------------------------------------------------------- |
| {Function} | ``                                     | predicate - A function to test each item emitted from the source Observable. |
| predicate  | `(value: T, index: number) => boolean` |                                                                              |

## return

{Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
specified predicate becomes false.

## name

skipWhile
