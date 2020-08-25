---
kind: FunctionDeclaration
name: debounceTime
module: operators
---

# debounceTime

## description

Emits a notification from the source Observable only after a particular time span
has passed without another source emission.

<span class="informal">It's like {@link delay}, but passes only the most
recent notification from each burst of emissions.</span>

![](debounceTime.png)

`debounceTime` delays notifications emitted by the source Observable, but drops
previous pending delayed emissions if a new notification arrives on the source
Observable. This operator keeps track of the most recent notification from the
source Observable, and emits that only when `dueTime` has passed
without any other notification appearing on the source Observable. If a new value
appears before `dueTime` silence occurs, the previous notification will be dropped
and will not be emitted and a new `dueTime` is scheduled.
If the completing event happens during `dueTime` the last cached notification
is emitted before the completion event is forwarded to the output observable.
If the error event happens during `dueTime` or after it only the error event is
forwarded to the output observable. The cache notification is not emitted in this case.

This is a rate-limiting operator, because it is impossible for more than one
notification to be emitted in any time window of duration `dueTime`, but it is also
a delay-like operator since output emissions do not occur at the same time as
they did on the source Observable. Optionally takes a {@link SchedulerLike} for
managing timers.

## Example

Emit the most recent click after a burst of clicks

```ts
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(debounceTime(1000));
result.subscribe((x) => console.log(x));
```

```ts
function debounceTime<T>(
  dueTime: number,
  scheduler: SchedulerLike = async
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/debounceTime.ts#L67-L69)

## see

{@link audit}
{@link auditTime}
{@link debounce}
{@link debounceTime}
{@link sample}
{@link sampleTime}
{@link throttle}
{@link throttleTime}

## Parameters

| Name            | Type            | Description                                               |
| --------------- | --------------- | --------------------------------------------------------- |
| {number}        | ``              | dueTime The timeout duration in milliseconds (or the time |
| {SchedulerLike} | ``              | [scheduler=async] The {@link SchedulerLike} to use for    |
| dueTime         | `number`        |                                                           |
| scheduler       | `SchedulerLike` |                                                           |

## return

{Observable} An Observable that delays the emissions of the source
Observable by the specified `dueTime`, and may drop some values if they occur
too frequently.

## name

debounceTime
