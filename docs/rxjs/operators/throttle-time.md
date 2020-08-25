---
kind: FunctionDeclaration
name: throttleTime
module: operators
---

# throttleTime

## description

Emits a value from the source Observable, then ignores subsequent source
values for `duration` milliseconds, then repeats this process.

<span class="informal">Lets a value pass, then ignores source values for the
next `duration` milliseconds.</span>

![](throttleTime.png)

`throttleTime` emits the source Observable values on the output Observable
when its internal timer is disabled, and ignores source values when the timer
is enabled. Initially, the timer is disabled. As soon as the first source
value arrives, it is forwarded to the output Observable, and then the timer
is enabled. After `duration` milliseconds (or the time unit determined
internally by the optional `scheduler`) has passed, the timer is disabled,
and this process repeats for the next source value. Optionally takes a
{@link SchedulerLike} for managing timers.

## Examples

#### Limit click rate

Emit clicks at a rate of at most one click per second

```ts
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(throttleTime(1000));
result.subscribe((x) => console.log(x));
```

#### Double Click

The following example only emits clicks which happen within a subsequent
delay of 400ms of the previous click. This for example can emulate a double
click. It makes use of the `trailing` parameter of the throttle configuration.

```ts
import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, withLatestFrom } from "rxjs/operators";

// defaultThottleConfig = { leading: true, trailing: false }
const throttleConfig = {
  leading: false,
  trailing: true,
};

const click = fromEvent(document, "click");
const doubleClick = click.pipe(
  throttleTime(400, asyncScheduler, throttleConfig)
);

doubleClick.subscribe((throttleValue: Event) => {
  console.log(`Double-clicked! Timestamp: ${throttleValue.timeStamp}`);
});
```

If you enable the `leading` parameter in this example, the output would be the primary click and
the double click, but restricts additional clicks within 400ms.

```ts
function throttleTime<T>(
  duration: number,
  scheduler: SchedulerLike = async,
  config: ThrottleConfig = defaultThrottleConfig
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/throttleTime.ts#L88-L92)

## see

{@link auditTime}
{@link debounceTime}
{@link delay}
{@link sampleTime}
{@link throttle}

## Parameters

| Name            | Type             | Description                                               |
| --------------- | ---------------- | --------------------------------------------------------- |
| {number}        | ``               | duration Time to wait before emitting another value after |
| {SchedulerLike} | ``               | [scheduler=async] The {@link SchedulerLike} to use for    |
| {Object}        | ``               | config a configuration object to define `leading` and     |
| duration        | `number`         |                                                           |
| scheduler       | `SchedulerLike`  |                                                           |
| config          | `ThrottleConfig` |                                                           |

## return

{Observable<T>} An Observable that performs the throttle operation to
limit the rate of emissions from the source.

## name

throttleTime
