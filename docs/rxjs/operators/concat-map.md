---
kind: FunctionDeclaration
name: concatMap
module: operators
---

# concatMap

## description

Projects each source value to an Observable which is merged in the output
Observable, in a serialized fashion waiting for each one to complete before
merging the next.

<span class="informal">Maps each value to an Observable, then flattens all of
these inner Observables using {@link concatAll}.</span>

![](concatMap.png)

Returns an Observable that emits items based on applying a function that you
supply to each item emitted by the source Observable, where that function
returns an (so-called "inner") Observable. Each new inner Observable is
concatenated with the previous inner Observable.

**Warning:** if source values arrive endlessly and faster than their
corresponding inner Observables can complete, it will result in memory issues
as inner Observables amass in an unbounded buffer waiting for their turn to
be subscribed to.

Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
to `1`.

## Example

For each click event, tick every second from 0 to 3, with no concurrency

```ts
import { fromEvent, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
result.subscribe((x) => console.log(x));

// Results in the following:
// (results are not concurrent)
// For every click on the "document" it will emit values 0 to 3 spaced
// on a 1000ms interval
// one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
```

```ts
function concatMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector?: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, ObservedValueOf<O> | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMap.ts#L71-L79)

## see

{@link concat}
{@link concatAll}
{@link concatMapTo}
{@link exhaustMap}
{@link mergeMap}
{@link switchMap}

## Parameters

| Name             | Type                                                                                           | Description                                             |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| {function(value: | ``                                                                                             | T, ?index: number): ObservableInput} project A function |
| project          | `(value: T, index: number) => O`                                                               |                                                         |
| resultSelector   | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |                                                         |

## return

{Observable} An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item emitted
by the source Observable and taking values from each projected inner
Observable sequentially.

## name

concatMap

## Overloads

```ts
function concatMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMap.ts#L5-L5)

### Parameters

| Name    | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| project | `(value: T, index: number) => O` |             |

```ts
function concatMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector: undefined
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMap.ts#L7-L7)

### Parameters

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| project        | `(value: T, index: number) => O` |             |
| resultSelector | `undefined`                      |             |

```ts
function concatMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concatMap.ts#L9-L9)

### Parameters

| Name           | Type                                                                                           | Description |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| project        | `(value: T, index: number) => O`                                                               |             |
| resultSelector | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |             |
