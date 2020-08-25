---
kind: FunctionDeclaration
name: concatMapTo
module: operators
---

# concatMapTo

## description

Projects each source value to the same Observable which is merged multiple
times in a serialized fashion on the output Observable.

<span class="informal">It's like {@link concatMap}, but maps each value
always to the same inner Observable.</span>

![](concatMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless
of the source value, and then flattens those resulting Observables into one
single Observable, which is the output Observable. Each new `innerObservable`
instance emitted on the output Observable is concatenated with the previous
`innerObservable` instance.

**Warning:** if source values arrive endlessly and faster than their
corresponding inner Observables can complete, it will result in memory issues
as inner Observables amass in an unbounded buffer waiting for their turn to
be subscribed to.

Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
set to `1`.

## Example

For each click event, tick every second from 0 to 3, with no concurrency

```ts
import { fromEvent, interval } from "rxjs";
import { concatMapTo, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(concatMapTo(interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

```ts
function concatMapTo<T, R, O extends ObservableInput<any>>(
  innerObservable: O,
  resultSelector?: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, ObservedValueOf<O> | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMapTo.ts#L67-L75)

## see

{@link concat}
{@link concatAll}
{@link concatMap}
{@link mergeMapTo}
{@link switchMapTo}

## Parameters

| Name              | Type                                                                                           | Description                                              |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| {ObservableInput} | ``                                                                                             | innerObservable An Observable to replace each value from |
| innerObservable   | `O`                                                                                            |                                                          |
| resultSelector    | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |                                                          |

## return

{Observable} An observable of values merged together by joining the
passed observable with itself, one after the other, for each value emitted
from the source.

## name

concatMapTo

## Overloads

```ts
function concatMapTo<O extends ObservableInput<any>>(
  observable: O
): OperatorFunction<any, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMapTo.ts#L5-L5)

### Parameters

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| observable | `O`  |             |

```ts
function concatMapTo<O extends ObservableInput<any>>(
  observable: O,
  resultSelector: undefined
): OperatorFunction<any, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMapTo.ts#L7-L7)

### Parameters

| Name           | Type        | Description |
| -------------- | ----------- | ----------- |
| observable     | `O`         |             |
| resultSelector | `undefined` |             |

```ts
function concatMapTo<T, R, O extends ObservableInput<any>>(
  observable: O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMapTo.ts#L9-L9)

### Parameters

| Name           | Type                                                                                           | Description |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| observable     | `O`                                                                                            |             |
| resultSelector | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |             |
