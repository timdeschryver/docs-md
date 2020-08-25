---
kind: FunctionDeclaration
name: bufferTime
module: operators
---

# bufferTime

## description

Buffers the source Observable values for a specific time period.

<span class="informal">Collects values from the past as an array, and emits
those arrays periodically in time.</span>

![](bufferTime.png)

Buffers values from the source for a specific time duration `bufferTimeSpan`.
Unless the optional argument `bufferCreationInterval` is given, it emits and
resets the buffer every `bufferTimeSpan` milliseconds. If
`bufferCreationInterval` is given, this operator opens the buffer every
`bufferCreationInterval` milliseconds and closes (emits and resets) the
buffer every `bufferTimeSpan` milliseconds. When the optional argument
`maxBufferSize` is specified, the buffer will be closed either after
`bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.

## Examples

Every second, emit an array of the recent click events

```ts
import { fromEvent } from "rxjs";
import { bufferTime } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe((x) => console.log(x));
```

Every 5 seconds, emit the click events from the next 2 seconds

```ts
import { fromEvent } from "rxjs";
import { bufferTime } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const buffered = clicks.pipe(bufferTime(2000, 5000));
buffered.subscribe((x) => console.log(x));
```

```ts
function bufferTime<T>(bufferTimeSpan: number): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferTime.ts#L72-L94)

## see

{@link buffer}
{@link bufferCount}
{@link bufferToggle}
{@link bufferWhen}
{@link windowTime}

## Parameters

| Name            | Type     | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| {number}        | ``       | bufferTimeSpan The amount of time to fill each buffer array. |
| {number}        | ``       | [bufferCreationInterval] The interval at which to start new  |
| {number}        | ``       | [maxBufferSize] The maximum buffer size.                     |
| {SchedulerLike} | ``       | [scheduler=async] The scheduler on which to schedule the     |
| bufferTimeSpan  | `number` |                                                              |

## return

{Observable<T[]>} An observable of arrays of buffered values.

## name

bufferTime

## Overloads

```ts
function bufferTime<T>(
  bufferTimeSpan: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferTime.ts#L11-L11)

### Parameters

| Name           | Type            | Description |
| -------------- | --------------- | ----------- |
| bufferTimeSpan | `number`        |             |
| scheduler      | `SchedulerLike` |             |

```ts
function bufferTime<T>(
  bufferTimeSpan: number,
  bufferCreationInterval: number | null | undefined,
  scheduler?: SchedulerLike
): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferTime.ts#L12-L12)

### Parameters

| Name                   | Type            | Description |
| ---------------------- | --------------- | ----------- |
| bufferTimeSpan         | `number`        |             |
| bufferCreationInterval | `number`        |             |
| scheduler              | `SchedulerLike` |             |

```ts
function bufferTime<T>(
  bufferTimeSpan: number,
  bufferCreationInterval: number | null | undefined,
  maxBufferSize: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferTime.ts#L13-L13)

### Parameters

| Name                   | Type            | Description |
| ---------------------- | --------------- | ----------- |
| bufferTimeSpan         | `number`        |             |
| bufferCreationInterval | `number`        |             |
| maxBufferSize          | `number`        |             |
| scheduler              | `SchedulerLike` |             |
