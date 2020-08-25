---
kind: FunctionDeclaration
name: bufferCount
module: operators
---

# bufferCount

## description

Buffers the source Observable values until the size hits the maximum
`bufferSize` given.

<span class="informal">Collects values from the past as an array, and emits
that array only when its size reaches `bufferSize`.</span>

![](bufferCount.png)

Buffers a number of values from the source Observable by `bufferSize` then
emits the buffer and clears it, and starts a new buffer each
`startBufferEvery` values. If `startBufferEvery` is not provided or is
`null`, then new buffers are started immediately at the start of the source
and when each buffer closes and is emitted.

## Examples

Emit the last two click events as an array

```ts
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const buffered = clicks.pipe(bufferCount(2));
buffered.subscribe((x) => console.log(x));
```

On every click, emit the last two click events as an array

```ts
import { fromEvent } from "rxjs";
import { bufferCount } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const buffered = clicks.pipe(bufferCount(2, 1));
buffered.subscribe((x) => console.log(x));
```

```ts
function bufferCount<T>(
  bufferSize: number,
  startBufferEvery: number | null = null
): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferCount.ts#L61-L65)

## see

{@link buffer}
{@link bufferTime}
{@link bufferToggle}
{@link bufferWhen}
{@link pairwise}
{@link windowCount}

## Parameters

| Name             | Type     | Description                                                 |
| ---------------- | -------- | ----------------------------------------------------------- |
| {number}         | ``       | bufferSize The maximum size of the buffer emitted.          |
| {number}         | ``       | [startBufferEvery] Interval at which to start a new buffer. |
| bufferSize       | `number` |                                                             |
| startBufferEvery | `number` |                                                             |

## return

{Observable<T[]>} An Observable of arrays of buffered values.

## name

bufferCount
