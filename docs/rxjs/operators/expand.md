---
kind: FunctionDeclaration
name: expand
module: operators
---

# expand

## description

Recursively projects each source value to an Observable which is merged in
the output Observable.

<span class="informal">It's similar to {@link mergeMap}, but applies the
projection function to every source value as well as every output value.
It's recursive.</span>

![](expand.png)

Returns an Observable that emits items based on applying a function that you
supply to each item emitted by the source Observable, where that function
returns an Observable, and then merging those resulting Observables and
emitting the results of this merger. _Expand_ will re-emit on the output
Observable every source value. Then, each output value is given to the
`project` function which returns an inner Observable to be merged on the
output Observable. Those output values resulting from the projection are also
given to the `project` function to produce new output values. This is how
_expand_ behaves recursively.

## Example

Start emitting the powers of two on every click, at most 10 of them

```ts
import { fromEvent, of } from "rxjs";
import { expand, mapTo, delay, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const powersOfTwo = clicks.pipe(
  mapTo(1),
  expand((x) => of(2 * x).pipe(delay(1000))),
  take(10)
);
powersOfTwo.subscribe((x) => console.log(x));
```

```ts
function expand<T, R>(
  project: (value: T, index: number) => ObservableInput<R>,
  concurrent: number = Infinity,
  scheduler?: SchedulerLike
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/expand.ts#L64-L70)

## see

{@link mergeMap}
{@link mergeScan}

## Parameters

| Name             | Type                                              | Description                                                          |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| {function(value: | ``                                                | T, index: number) => Observable} project A function                  |
| {number}         | ``                                                | [concurrent=Infinity] Maximum number of input                        |
| {SchedulerLike}  | ``                                                | [scheduler=null] The {@link SchedulerLike} to use for subscribing to |
| project          | `(value: T, index: number) => ObservableInput<R>` |                                                                      |
| concurrent       | `number`                                          |                                                                      |
| scheduler        | `SchedulerLike`                                   |                                                                      |

## return

{Observable} An Observable that emits the source values and also
result of applying the projection function to each value emitted on the
output Observable and merging the results of the Observables obtained
from this transformation.

## name

expand

## Overloads

```ts
function expand<T, R>(
  project: (value: T, index: number) => ObservableInput<R>,
  concurrent?: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/expand.ts#L9-L9)

### Parameters

| Name       | Type                                              | Description |
| ---------- | ------------------------------------------------- | ----------- |
| project    | `(value: T, index: number) => ObservableInput<R>` |             |
| concurrent | `number`                                          |             |
| scheduler  | `SchedulerLike`                                   |             |

```ts
function expand<T>(
  project: (value: T, index: number) => ObservableInput<T>,
  concurrent?: number,
  scheduler?: SchedulerLike
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/expand.ts#L10-L10)

### Parameters

| Name       | Type                                              | Description |
| ---------- | ------------------------------------------------- | ----------- |
| project    | `(value: T, index: number) => ObservableInput<T>` |             |
| concurrent | `number`                                          |             |
| scheduler  | `SchedulerLike`                                   |             |
