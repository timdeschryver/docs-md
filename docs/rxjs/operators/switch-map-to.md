---
kind: FunctionDeclaration
name: switchMapTo
module: operators
---

# switchMapTo

## description

Projects each source value to the same Observable which is flattened multiple
times with {@link switchMap} in the output Observable.

<span class="informal">It's like {@link switchMap}, but maps each value
always to the same inner Observable.</span>

![](switchMapTo.png)

Maps each source value to the given Observable `innerObservable` regardless
of the source value, and then flattens those resulting Observables into one
single Observable, which is the output Observable. The output Observables
emits values only from the most recently emitted instance of
`innerObservable`.

## Example

Rerun an interval Observable on every click event

```ts
import { fromEvent, interval } from "rxjs";
import { switchMapTo } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(switchMapTo(interval(1000)));
result.subscribe((x) => console.log(x));
```

```ts
function switchMapTo<T, I, R>(
  innerObservable: ObservableInput<I>,
  resultSelector?: (
    outerValue: T,
    innerValue: I,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, I | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/switchMapTo.ts#L51-L56)

## see

{@link concatMapTo}
{@link switchAll}
{@link switchMap}
{@link mergeMapTo}

## Parameters

| Name              | Type                                                                          | Description                                              |
| ----------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| {ObservableInput} | ``                                                                            | innerObservable An Observable to replace each value from |
| innerObservable   | `any`                                                                         |                                                          |
| resultSelector    | `(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R` |                                                          |

## return

{Observable} An Observable that emits items from the given
`innerObservable` (and optionally transformed through the deprecated `resultSelector`)
every time a value is emitted on the source Observable, and taking only the values
from the most recently projected inner Observable.

## name

switchMapTo

## Overloads

```ts
function switchMapTo<R>(
  observable: ObservableInput<R>
): OperatorFunction<any, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/switchMapTo.ts#L5-L5)

### Parameters

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| observable | `any` |             |

```ts
function switchMapTo<R>(
  observable: ObservableInput<R>,
  resultSelector: undefined
): OperatorFunction<any, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/switchMapTo.ts#L7-L7)

### Parameters

| Name           | Type        | Description |
| -------------- | ----------- | ----------- |
| observable     | `any`       |             |
| resultSelector | `undefined` |             |

```ts
function switchMapTo<T, I, R>(
  observable: ObservableInput<I>,
  resultSelector: (
    outerValue: T,
    innerValue: I,
    outerIndex: number,
    innerIndex: number
  ) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/switchMapTo.ts#L9-L9)

### Parameters

| Name           | Type                                                                          | Description |
| -------------- | ----------------------------------------------------------------------------- | ----------- |
| observable     | `any`                                                                         |             |
| resultSelector | `(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R` |             |
