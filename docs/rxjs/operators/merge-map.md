---
kind: FunctionDeclaration
name: mergeMap
module: operators
---

# mergeMap

## description

Projects each source value to an Observable which is merged in the output
Observable.

<span class="informal">Maps each value to an Observable, then flattens all of
these inner Observables using {@link mergeAll}.</span>

![](mergeMap.png)

Returns an Observable that emits items based on applying a function that you
supply to each item emitted by the source Observable, where that function
returns an Observable, and then merging those resulting Observables and
emitting the results of this merger.

## Example

Map and flatten each letter to an Observable ticking every 1 second

```ts
import { of, interval } from "rxjs";
import { mergeMap, map } from "rxjs/operators";

const letters = of("a", "b", "c");
const result = letters.pipe(
  mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
);
result.subscribe((x) => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
```

```ts
function mergeMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector?:
    | ((
        outerValue: T,
        innerValue: ObservedValueOf<O>,
        outerIndex: number,
        innerIndex: number
      ) => R)
    | number,
  concurrent: number = Infinity
): OperatorFunction<T, ObservedValueOf<O> | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMap.ts#L73-L89)

## see

{@link concatMap}
{@link exhaustMap}
{@link merge}
{@link mergeAll}
{@link mergeMapTo}
{@link mergeScan}
{@link switchMap}

## Parameters

| Name             | Type                             | Description                                                                                     |
| ---------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| {function(value: | ``                               | T, ?index: number): ObservableInput} project A function                                         |
| {number}         | ``                               | [concurrent=Infinity] Maximum number of input                                                   |
| project          | `(value: T, index: number) => O` |                                                                                                 |
| resultSelector   | `number                          | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R)` |  |
| concurrent       | `number`                         |                                                                                                 |

## return

{Observable} An Observable that emits the result of applying the
projection function (and the optional deprecated `resultSelector`) to each item
emitted by the source Observable and merging the results of the Observables
obtained from this transformation.

## Overloads

```ts
function mergeMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  concurrent?: number
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMap.ts#L12-L12)

### Parameters

| Name       | Type                             | Description |
| ---------- | -------------------------------- | ----------- |
| project    | `(value: T, index: number) => O` |             |
| concurrent | `number`                         |             |

```ts
function mergeMap<T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector: undefined,
  concurrent?: number
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMap.ts#L14-L14)

### Parameters

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| project        | `(value: T, index: number) => O` |             |
| resultSelector | `undefined`                      |             |
| concurrent     | `number`                         |             |

```ts
function mergeMap<T, R, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R,
  concurrent?: number
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMap.ts#L16-L16)

### Parameters

| Name           | Type                                                                                           | Description |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| project        | `(value: T, index: number) => O`                                                               |             |
| resultSelector | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |             |
| concurrent     | `number`                                                                                       |             |
