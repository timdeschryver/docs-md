---
kind: FunctionDeclaration
name: take
module: operators
---

# take

## description

Emits only the first `count` values emitted by the source Observable.

<span class="informal">Takes the first `count` values from the source, then
completes.</span>

![](take.png)

`take` returns an Observable that emits only the first `count` values emitted
by the source Observable. If the source emits fewer than `count` values then
all of its values are emitted. After that, it completes, regardless if the
source completes.

## Example

Take the first 5 seconds of an infinite 1-second interval Observable

```ts
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const intervalCount = interval(1000);
const takeFive = intervalCount.pipe(take(5));
takeFive.subscribe((x) => console.log(x));

// Logs:
// 0
// 1
// 2
// 3
// 4
```

```ts
function take<T>(count: number): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/take.ts#L53-L62)

## see

{@link takeLast}
{@link takeUntil}
{@link takeWhile}
{@link skip}

## throws

{ArgumentOutOfRangeError} When using `take(i)`, it delivers an
ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
{TypeError} when no numeric argument is passed.

## Parameters

| Name  | Type     | Description                                  |
| ----- | -------- | -------------------------------------------- |
| count | `number` | The maximum number of `next` values to emit. |

## return

An Observable that emits only the first `count`
values emitted by the source Observable, or all of the values from the source
if the source emits fewer than `count` values.
