---
kind: FunctionDeclaration
name: windowTime
module: operators
---

# windowTime

## description

Branch out the source Observable values as a nested Observable periodically
in time.

<span class="informal">It's like {@link bufferTime}, but emits a nested
Observable instead of an array.</span>

![](windowTime.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable starts a new window periodically, as
determined by the `windowCreationInterval` argument. It emits each window
after a fixed timespan, specified by the `windowTimeSpan` argument. When the
source Observable completes or encounters an error, the output Observable
emits the current window and propagates the notification from the source
Observable. If `windowCreationInterval` is not provided, the output
Observable starts a new window when the previous window of duration
`windowTimeSpan` completes. If `maxWindowCount` is provided, each window
will emit at most fixed number of values. Window will complete immediately
after emitting last value and next one still will open as specified by
`windowTimeSpan` and `windowCreationInterval` arguments.

## Examples

In every window of 1 second each, emit at most 2 click events

```ts
import { fromEvent } from "rxjs";
import { windowTime, map, mergeAll, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  windowTime(1000),
  map((win) => win.pipe(take(2))), // each window has at most 2 emissions
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));
```

Every 5 seconds start a window 1 second long, and emit at most 2 click events per window

```ts
import { fromEvent } from "rxjs";
import { windowTime, map, mergeAll, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  windowTime(1000, 5000),
  map((win) => win.pipe(take(2))), // each window has at most 2 emissions
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));
```

Same as example above but with maxWindowCount instead of take

```ts
import { fromEvent } from "rxjs";
import { windowTime, mergeAll } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  windowTime(1000, 5000, 2), // each window has still at most 2 emissions
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));
```

```ts
function windowTime<T>(
  windowTimeSpan: number
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowTime.ts#L100-L124)

## see

{@link window}
{@link windowCount}
{@link windowToggle}
{@link windowWhen}
{@link bufferTime}

## Parameters

| Name                   | Type     | Description                             |
| ---------------------- | -------- | --------------------------------------- |
| windowTimeSpan         | `number` | The amount of time to fill each window. |
| windowCreationInterval | ``       | The interval at which to start new      |
| maxWindowSize          | ``       | Max number of                           |
| scheduler              | ``       | The scheduler on which to schedule the  |

## returnAn

observable of windows, which in turn are Observables.

## Overloads

```ts
function windowTime<T>(
  windowTimeSpan: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowTime.ts#L12-L13)

### Parameters

| Name           | Type            | Description |
| -------------- | --------------- | ----------- |
| windowTimeSpan | `number`        |             |
| scheduler      | `SchedulerLike` |             |

```ts
function windowTime<T>(
  windowTimeSpan: number,
  windowCreationInterval: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowTime.ts#L14-L16)

### Parameters

| Name                   | Type            | Description |
| ---------------------- | --------------- | ----------- |
| windowTimeSpan         | `number`        |             |
| windowCreationInterval | `number`        |             |
| scheduler              | `SchedulerLike` |             |

```ts
function windowTime<T>(
  windowTimeSpan: number,
  windowCreationInterval: number,
  maxWindowSize: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowTime.ts#L17-L20)

### Parameters

| Name                   | Type            | Description |
| ---------------------- | --------------- | ----------- |
| windowTimeSpan         | `number`        |             |
| windowCreationInterval | `number`        |             |
| maxWindowSize          | `number`        |             |
| scheduler              | `SchedulerLike` |             |
