---
kind: FunctionDeclaration
name: count
module: operators
---

# count

## description

Counts the number of emissions on the source and emits that number when the
source completes.

<span class="informal">Tells how many values were emitted, when the source
completes.</span>

![](count.png)

`count` transforms an Observable that emits values into an Observable that
emits a single value that represents the number of values emitted by the
source Observable. If the source Observable terminates with an error, `count`
will pass this error notification along without emitting a value first. If
the source Observable does not terminate at all, `count` will neither emit
a value nor terminate. This operator takes an optional `predicate` function
as argument, in which case the output emission will represent the number of
source values that matched `true` with the `predicate`.

## Examples

Counts how many seconds have passed before the first click happened

```ts
import { fromEvent, interval } from "rxjs";
import { count, takeUntil } from "rxjs/operators";

const seconds = interval(1000);
const clicks = fromEvent(document, "click");
const secondsBeforeClick = seconds.pipe(takeUntil(clicks));
const result = secondsBeforeClick.pipe(count());
result.subscribe((x) => console.log(x));
```

Counts how many odd numbers are there between 1 and 7

```ts
import { range } from "rxjs";
import { count } from "rxjs/operators";

const numbers = range(1, 7);
const result = numbers.pipe(count((i) => i % 2 === 1));
result.subscribe((x) => console.log(x));
// Results in:
// 4
```

```ts
function count<T>(
  predicate?: (value: T, index: number, source: Observable<T>) => boolean
): OperatorFunction<T, number>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/count.ts#L65-L67)

## see

{@link max}
{@link min}
{@link reduce}

## Parameters

| Name             | Type                                                          | Description                                                  |
| ---------------- | ------------------------------------------------------------- | ------------------------------------------------------------ |
| {function(value: | ``                                                            | T, i: number, source: Observable<T>): boolean} [predicate] A |
| predicate        | `(value: T, index: number, source: Observable<T>) => boolean` |                                                              |

## return

{Observable} An Observable of one number that represents the count as
described above.

## name

count
