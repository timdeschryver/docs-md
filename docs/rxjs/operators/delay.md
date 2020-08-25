---
kind: FunctionDeclaration
name: delay
module: operators
---

# delay

## description

Delays the emission of items from the source Observable by a given timeout or
until a given Date.

<span class="informal">Time shifts each item by some specified amount of
milliseconds.</span>

![](delay.png)

If the delay argument is a Number, this operator time shifts the source
Observable by that amount of time expressed in milliseconds. The relative
time intervals between the values are preserved.

If the delay argument is a Date, this operator time shifts the start of the
Observable execution until the given date occurs.

## Examples

Delay each click by one second

```ts
import { fromEvent } from "rxjs";
import { delay } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
delayedClicks.subscribe((x) => console.log(x));
```

Delay all clicks until a future date happens

```ts
import { fromEvent } from "rxjs";
import { delay } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const date = new Date("March 15, 2050 12:00:00"); // in the future
const delayedClicks = clicks.pipe(delay(date)); // click emitted only after that date
delayedClicks.subscribe((x) => console.log(x));
```

```ts
function delay<T>(
  delay: number | Date,
  scheduler: SchedulerLike = async
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/delay.ts#L62-L65)

## see

{@link debounceTime}
{@link delayWhen}

## Parameters

| Name            | Type            | Description                                            |
| --------------- | --------------- | ------------------------------------------------------ |
| {number         | Date}           | ``                                                     | delay The delay duration in milliseconds (a `number`) or |
| {SchedulerLike} | ``              | [scheduler=async] The {@link SchedulerLike} to use for |
| delay           | `number         | Date`                                                  |  |
| scheduler       | `SchedulerLike` |                                                        |

## return

{Observable} An Observable that delays the emissions of the source
Observable by the specified timeout or Date.
