---
kind: FunctionDeclaration
name: mergeMapTo
module: operators
---

# mergeMapTo

## description

Projects each source value to the same Observable which is merged multiple
times in the output Observable.

<span class="informal">It's like {@link mergeMap}, but maps each value always
to the same inner Observable.</span>

![](mergeMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless
of the source value, and then merges those resulting Observables into one
single Observable, which is the output Observable.

## Example

For each click event, start an interval Observable ticking every 1 second

```ts
import { fromEvent, interval } from "rxjs";
import { mergeMapTo } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(mergeMapTo(interval(1000)));
result.subscribe((x) => console.log(x));
```

```ts
function mergeMapTo<T, R, O extends ObservableInput<any>>(
  innerObservable: O,
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

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMapTo.ts#L50-L62)

## see

{@link concatMapTo}
{@link merge}
{@link mergeAll}
{@link mergeMap}
{@link mergeScan}
{@link switchMapTo}

## Parameters

| Name              | Type     | Description                                                                                     |
| ----------------- | -------- | ----------------------------------------------------------------------------------------------- |
| {ObservableInput} | ``       | innerObservable An Observable to replace each value from                                        |
| {number}          | ``       | [concurrent=Infinity] Maximum number of input                                                   |
| innerObservable   | `O`      |                                                                                                 |
| resultSelector    | `number  | ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R)` |  |
| concurrent        | `number` |                                                                                                 |

## return

{Observable} An Observable that emits items from the given
`innerObservable`

## name

mergeMapTo

## Overloads

```ts
function mergeMapTo<O extends ObservableInput<any>>(
  innerObservable: O,
  concurrent?: number
): OperatorFunction<any, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMapTo.ts#L6-L6)

### Parameters

| Name            | Type     | Description |
| --------------- | -------- | ----------- |
| innerObservable | `O`      |             |
| concurrent      | `number` |             |

```ts
function mergeMapTo<T, R, O extends ObservableInput<any>>(
  innerObservable: O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number
  ) => R,
  concurrent?: number
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeMapTo.ts#L8-L8)

### Parameters

| Name            | Type                                                                                           | Description |
| --------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| innerObservable | `O`                                                                                            |             |
| resultSelector  | `(outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R` |             |
| concurrent      | `number`                                                                                       |             |
