---
kind: FunctionDeclaration
name: skipLast
module: operators
---

# skipLast

## description

Skip the last `count` values emitted by the source Observable.

![](skipLast.png)

`skipLast` returns an Observable that accumulates a queue with a length
enough to store the first `count` values. As more values are received,
values are taken from the front of the queue and produced on the result
sequence. This causes values to be delayed.

## Example

Skip the last 2 values of an Observable with many values

```ts
import { range } from "rxjs";
import { skipLast } from "rxjs/operators";

const many = range(1, 5);
const skipLastTwo = many.pipe(skipLast(2));
skipLastTwo.subscribe((x) => console.log(x));

// Results in:
// 1 2 3
```

```ts
function skipLast<T>(count: number): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/skipLast.ts#L45-L47)

## see

{@link skip}
{@link skipUntil}
{@link skipWhile}
{@link take}

## throws

{ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
ArgumentOutOrRangeError if `i < 0`.

## Parameters

| Name     | Type     | Description                                                             |
| -------- | -------- | ----------------------------------------------------------------------- |
| {number} | ``       | count Number of elements to skip from the end of the source Observable. |
| count    | `number` |                                                                         |

## returns

{Observable<T>} An Observable that skips the last count values
emitted by the source Observable.

## name

skipLast
