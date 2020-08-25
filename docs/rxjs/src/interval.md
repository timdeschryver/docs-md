---
kind: FunctionDeclaration
name: interval
module: src
---

# interval

## description

Creates an Observable that emits sequential numbers every specified
interval of time, on a specified {@link SchedulerLike}.

<span class="informal">Emits incremental numbers periodically in time.
</span>

![](interval.png)

`interval` returns an Observable that emits an infinite sequence of
ascending integers, with a constant interval of time of your choosing
between those emissions. The first emission is not sent immediately, but
only after the first period has passed. By default, this operator uses the
`async` {@link SchedulerLike} to provide a notion of time, but you may pass any
{@link SchedulerLike} to it.

## Example

Emits ascending numbers, one every second (1000ms) up to the number 3

```ts
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe((x) => console.log("Next: ", x));

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3
```

```ts
function interval(
  period = 0,
  scheduler: SchedulerLike = async
): Observable<number>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/interval.ts#L55-L71)

## see

{@link timer}
{@link delay}

## Parameters

| Name            | Type            | Description                                                       |
| --------------- | --------------- | ----------------------------------------------------------------- |
| {number}        | ``              | [period=0] The interval size in milliseconds (by default)         |
| {SchedulerLike} | ``              | [scheduler=async] The {@link SchedulerLike} to use for scheduling |
| period          | `number`        |                                                                   |
| scheduler       | `SchedulerLike` |                                                                   |

## return

{Observable} An Observable that emits a sequential number each time
interval.

## static

true

## name

interval

## owner

Observable
