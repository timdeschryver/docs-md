---
kind: FunctionDeclaration
name: windowToggle
module: operators
---

# windowToggle

## description

Branch out the source Observable values as a nested Observable starting from
an emission from `openings` and ending when the output of `closingSelector`
emits.

<span class="informal">It's like {@link bufferToggle}, but emits a nested
Observable instead of an array.</span>

![](windowToggle.png)

Returns an Observable that emits windows of items it collects from the source
Observable. The output Observable emits windows that contain those items
emitted by the source Observable between the time when the `openings`
Observable emits an item and when the Observable returned by
`closingSelector` emits an item.

## Example

Every other second, emit the click events from the next 500ms

```ts
import { fromEvent, interval, EMPTY } from "rxjs";
import { windowToggle, mergeAll } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const openings = interval(1000);
const result = clicks.pipe(
  windowToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY)),
  mergeAll()
);
result.subscribe((x) => console.log(x));
```

```ts
function windowToggle<T, O>(
  openings: Observable<O>,
  closingSelector: (openValue: O) => Observable<any>
): OperatorFunction<T, Observable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/windowToggle.ts#L57-L60)

## see

{@link window}
{@link windowCount}
{@link windowTime}
{@link windowWhen}
{@link bufferToggle}

## Parameters

| Name             | Type                                | Description                                           |
| ---------------- | ----------------------------------- | ----------------------------------------------------- |
| {Observable<O>}  | ``                                  | openings An observable of notifications to start new  |
| {function(value: | ``                                  | O): Observable} closingSelector A function that takes |
| openings         | `Observable<O>`                     |                                                       |
| closingSelector  | `(openValue: O) => Observable<any>` |                                                       |

## return

{Observable<Observable<T>>} An observable of windows, which in turn
are Observables.

## name

windowToggle
