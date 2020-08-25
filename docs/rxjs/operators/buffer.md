---
kind: FunctionDeclaration
name: buffer
module: operators
---

# buffer

## description

Buffers the source Observable values until `closingNotifier` emits.

<span class="informal">Collects values from the past as an array, and emits
that array only when another Observable emits.</span>

![](buffer.png)

Buffers the incoming Observable values until the given `closingNotifier`
Observable emits a value, at which point it emits the buffer on the output
Observable and starts a new buffer internally, awaiting the next time
`closingNotifier` emits.

## Example

On every click, emit array of most recent interval events

```ts
import { fromEvent, interval } from "rxjs";
import { buffer } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe((x) => console.log(x));
```

```ts
function buffer<T>(closingNotifier: Observable<any>): OperatorFunction<T, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/buffer.ts#L47-L51)

## see

{@link bufferCount}
{@link bufferTime}
{@link bufferToggle}
{@link bufferWhen}
{@link window}

## Parameters

| Name              | Type              | Description                                    |
| ----------------- | ----------------- | ---------------------------------------------- |
| {Observable<any>} | ``                | closingNotifier An Observable that signals the |
| closingNotifier   | `Observable<any>` |                                                |

## return

{Observable<T[]>} An Observable of buffers, which are arrays of
values.

## name

buffer
