---
kind: FunctionDeclaration
name: range
module: src
---

# range

## description

Creates an Observable that emits a sequence of numbers within a specified
range.

<span class="informal">Emits a sequence of numbers in a range.</span>

![](range.png)

`range` operator emits a range of sequential integers, in order, where you
select the `start` of the range and its `length`. By default, uses no
{@link SchedulerLike} and just delivers the notifications synchronously, but may use
an optional {@link SchedulerLike} to regulate those deliveries.

## Example

### Produce a range of numbers

```ts
import { range } from "rxjs";

const numbers = range(1, 3);

numbers.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Complete!");
  },
});

// Logs:
// 1
// 2
// 3
// "Complete!"
```

```ts
function range(
  start: number = 0,
  count?: number,
  scheduler?: SchedulerLike
): Observable<number>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/range.ts#L51-L82)

## see

{@link timer}
{@link index/interval}

## Parameters

| Name            | Type            | Description                                               |
| --------------- | --------------- | --------------------------------------------------------- |
| {number}        | ``              | [start=0] The value of the first integer in the sequence. |
| {number}        | ``              | count The number of sequential integers to generate.      |
| {SchedulerLike} | ``              | [scheduler] A {@link SchedulerLike} to use for scheduling |
| start           | `number`        |                                                           |
| count           | `number`        |                                                           |
| scheduler       | `SchedulerLike` |                                                           |

## return

{Observable} An Observable of numbers that emits a finite range of
sequential integers.

## static

true

## name

range

## owner

Observable
