---
kind: FunctionDeclaration
name: exhaustMap
module: operators
---

# exhaustMap

## description

Projects each source value to an Observable which is merged in the output
Observable only if the previous projected Observable has completed.

<span class="informal">Maps each value to an Observable, then flattens all of
these inner Observables using {@link exhaust}.</span>

![](exhaustMap.png)

Returns an Observable that emits items based on applying a function that you
supply to each item emitted by the source Observable, where that function
returns an (so-called "inner") Observable. When it projects a source value to
an Observable, the output Observable begins emitting the items emitted by
that projected Observable. However, `exhaustMap` ignores every new projected
Observable if the previous projected Observable has not yet completed. Once
that one completes, it will accept and flatten the next projected Observable
and repeat this process.

## Example

Run a finite timer for each click, only if there is no currently active timer

```ts
import { fromEvent, interval } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(exhaustMap((ev) => interval(1000).pipe(take(5))));
result.subscribe((x) => console.log(x));
```

```ts
function exhaustMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector?: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, ObservedValueOf<O> | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaustMap.ts#L63-L77)

## see

{@link concatMap}
{@link exhaust}
{@link mergeMap}
{@link switchMap}

## Parameters

| Name             | Type                                                                                           | Description                                             |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| {function(value: | ``                                                                                             | T, ?index: number): ObservableInput} project A function |
| project          | `(value: T, index: number) => O`                                                               |                                                         |
| resultSelector   | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |                                                         |

## return

{Observable} An Observable containing projected Observables
of each item of the source, ignoring projected Observables that start before
their preceding Observable has completed.

## name

exhaustMap

## Overloads

```ts
function exhaustMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaustMap.ts#L12-L12)

### Parameters

| Name    | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| project | `(value: T, index: number) => O` |             |

```ts
function exhaustMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector: undefined
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaustMap.ts#L14-L14)

### Parameters

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| project        | `(value: T, index: number) => O` |             |
| resultSelector | `undefined`                      |             |

```ts
function exhaustMap<T, I, R>(
  project: (value: T, index: number) => ObservableInput<I>,
  resultSelector: (
    outerValue: T,
    innerValue: I,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaustMap.ts#L16-L16)

### Parameters

| Name           | Type                                                                          | Description |
| -------------- | ----------------------------------------------------------------------------- | ----------- |
| project        | `(value: T, index: number) => ObservableInput<I>`                             |             |
| resultSelector | `(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R` |             |
