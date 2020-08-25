---
kind: FunctionDeclaration
name: mergeScan
module: operators
---

# mergeScan

## description

Applies an accumulator function over the source Observable where the
accumulator function itself returns an Observable, then each intermediate
Observable returned is merged into the output Observable.

<span class="informal">It's like {@link scan}, but the Observables returned
by the accumulator are merged into the outer Observable.</span>

## Example

Count the number of click events

```ts
import { fromEvent, of } from "rxjs";
import { mapTo, mergeScan } from "rxjs/operators";

const click$ = fromEvent(document, "click");
const one$ = click$.pipe(mapTo(1));
const seed = 0;
const count$ = one$.pipe(mergeScan((acc, one) => of(acc + one), seed));
count$.subscribe((x) => console.log(x));

// Results:
// 1
// 2
// 3
// 4
// ...and so on for each click
```

```ts
function mergeScan<T, R>(
  accumulator: (acc: R, value: T, index: number) => ObservableInput<R>,
  seed: R,
  concurrent: number = Infinity
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeScan.ts#L46-L50)

## Parameters

| Name           | Type                                                      | Description                              |
| -------------- | --------------------------------------------------------- | ---------------------------------------- |
| {function(acc: | ``                                                        | R, value: T): Observable<R>} accumulator |
| seed           | `R`                                                       | The initial accumulation value.          |
| {number}       | ``                                                        | [concurrent=Infinity] Maximum number of  |
| accumulator    | `(acc: R, value: T, index: number) => ObservableInput<R>` |                                          |
| concurrent     | `number`                                                  |                                          |

## return

{Observable<R>} An observable of the accumulated values.

## name

mergeScan
