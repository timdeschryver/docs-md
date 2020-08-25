---
kind: FunctionDeclaration
name: windowWhen
module: operators
---

# windowWhen

## description

Branch out the source Observable values as a nested Observable using a
factory function of closing Observables to determine when to start a new
window.

<span class="informal">It's like {@link bufferWhen}, but emits a nested
Observable instead of an array.</span>

![](windowWhen.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits connected, non-overlapping windows.
It emits the current window and opens a new one whenever the Observable
produced by the specified `closingSelector` function emits an item. The first
window is opened immediately when subscribing to the output Observable.

## Example

Emit only the first two clicks events in every window of [1-5] random seconds

```ts
import { fromEvent, interval } from "rxjs";
import { windowWhen, map, mergeAll, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(
  windowWhen(() => interval(1000 + Math.random() * 4000)),
  map((win) => win.pipe(take(2))), // each window has at most 2 emissions
  mergeAll() // flatten the Observable-of-Observables
);
result.subscribe((x) => console.log(x));
```

```ts
function windowWhen<T>(
  closingSelector: () => Observable<any>
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowWhen.ts#L53-L57)

## see

{@link window}
{@link windowCount}
{@link windowTime}
{@link windowToggle}
{@link bufferWhen}

## Parameters

| Name            | Type                    | Description                                          |
| --------------- | ----------------------- | ---------------------------------------------------- |
| {function():    | ``                      | Observable} closingSelector A function that takes no |
| closingSelector | `() => Observable<any>` |                                                      |

## return

{Observable<Observable<T>>} An observable of windows, which in turn
are Observables.

## name

windowWhen
