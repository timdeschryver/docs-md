---
kind: FunctionDeclaration
name: bufferWhen
module: operators
---

# bufferWhen

## description

Buffers the source Observable values, using a factory function of closing
Observables to determine when to close, emit, and reset the buffer.

<span class="informal">Collects values from the past as an array. When it
starts collecting values, it calls a function that returns an Observable that
tells when to close the buffer and restart collecting.</span>

![](bufferWhen.png)

Opens a buffer immediately, then closes the buffer when the observable
returned by calling `closingSelector` function emits a value. When it closes
the buffer, it immediately opens a new buffer and repeats the process.

## Example

Emit an array of the last clicks every [1-5] random seconds

```ts
import { fromEvent, interval } from "rxjs";
import { bufferWhen } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const buffered = clicks.pipe(
  bufferWhen(() => interval(1000 + Math.random() * 4000))
);
buffered.subscribe((x) => console.log(x));
```

```ts
function bufferWhen<T>(
  closingSelector: () => Observable<any>
): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/bufferWhen.ts#L50-L54)

## see

{@link buffer}
{@link bufferCount}
{@link bufferTime}
{@link bufferToggle}
{@link windowWhen}

## Parameters

| Name            | Type                    | Description                                          |
| --------------- | ----------------------- | ---------------------------------------------------- |
| {function():    | ``                      | Observable} closingSelector A function that takes no |
| closingSelector | `() => Observable<any>` |                                                      |

## return

{Observable<T[]>} An observable of arrays of buffered values.

## name

bufferWhen
