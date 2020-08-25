---
kind: FunctionDeclaration
name: concatWith
module: operators
---

# concatWith

## description

Emits all of the values from the source observable, then, once it completes, subscribes
to each observable source provided, one at a time, emitting all of their values, and not subscribing
to the next one until it completes.

`concat(a$, b$, c$)` is the same as `a$.pipe(concatWith(b$, c$))`.

## Example

Listen for one mouse click, then listen for all mouse moves.

```ts
import { fromEvent } from "rxjs";
import { concatWith } from "rxjs/operators";

const clicks$ = fromEvent(document, "click");
const moves$ = fromEvent(document, "mousemove");

clicks$
  .pipe(
    map(() => "click"),
    take(1),
    concatWith(moves$.pipe(map(() => "move")))
  )
  .subscribe((x) => console.log(x));

// 'click'
// 'move'
// 'move'
// 'move'
// ...
```

```ts
function concatWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, ObservedValueUnionFromArray<A> | T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatWith.ts#L47-L52)

## Parameters

| Name         | Type | Description                                                                                   |
| ------------ | ---- | --------------------------------------------------------------------------------------------- |
| otherSources | `A`  | Other observable sources to subscribe to, in sequence, after the original source is complete. |

## Overloads

```ts
function concatWith<T>(): OperatorFunction<T, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatWith.ts#L6-L6)

```ts
function concatWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, ObservedValueUnionFromArray<A> | T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatWith.ts#L7-L7)

### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| otherSources | `A`  |             |
