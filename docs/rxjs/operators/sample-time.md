---
kind: FunctionDeclaration
name: sampleTime
module: operators
---

# sampleTime

## description

Emits the most recently emitted value from the source Observable within
periodic time intervals.

<span class="informal">Samples the source Observable at periodic time
intervals, emitting what it samples.</span>

![](sampleTime.png)

`sampleTime` periodically looks at the source Observable and emits whichever
value it has most recently emitted since the previous sampling, unless the
source has not emitted anything since the previous sampling. The sampling
happens periodically in time every `period` milliseconds (or the time unit
defined by the optional `scheduler` argument). The sampling starts as soon as
the output Observable is subscribed.

## Example

Every second, emit the most recent click at most once

```ts
import { fromEvent } from "rxjs";
import { sampleTime } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(sampleTime(1000));
result.subscribe((x) => console.log(x));
```

```ts
function sampleTime<T>(
  period: number,
  scheduler: SchedulerLike = async
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/sampleTime.ts#L49-L51)

## see

{@link auditTime}
{@link debounceTime}
{@link delay}
{@link sample}
{@link throttleTime}

## Parameters

| Name            | Type            | Description                                                 |
| --------------- | --------------- | ----------------------------------------------------------- |
| {number}        | ``              | period The sampling period expressed in milliseconds or the |
| {SchedulerLike} | ``              | [scheduler=async] The {@link SchedulerLike} to use for      |
| period          | `number`        |                                                             |
| scheduler       | `SchedulerLike` |                                                             |

## return

{Observable<T>} An Observable that emits the results of sampling the
values emitted by the source Observable at the specified time interval.

## name

sampleTime
