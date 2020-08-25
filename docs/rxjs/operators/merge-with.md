---
kind: FunctionDeclaration
name: mergeWith
module: operators
---

# mergeWith

## description

Merge the values from all observables to an single observable result.

Creates an observable, that when subscribed to, subscribes to the source
observable, and all other sources provided as arguments. All values from
every source are emitted from the resulting subscription.

When all sources complete, the resulting observable will complete.

When any one source errors, the resulting observable will error.

### Example

Joining all outputs from multiple user input event streams:

```ts
import { fromEvent } from "rxjs";
import { map, mergeWith } from "rxjs/operators";

const clicks$ = fromEvent(document, "click").pipe(map(() => "click"));
const mousemoves$ = fromEvent(document, "mousemove").pipe(
  map(() => "mousemove")
);
const dblclicks$ = fromEvent(document, "dblclick").pipe(map(() => "dblclick"));

mousemoves$
  .pipe(mergeWith(clicks$, dblclicks$))
  .subscribe((x) => console.log(x));

// result (assuming user interactions)
// "mousemove"
// "mousemove"
// "mousemove"
// "click"
// "click"
// "dblclick"
```

```ts
function mergeWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, T | ObservedValueUnionFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L109-L111)

## Parameters

| Name         | Type | Description                                     |
| ------------ | ---- | ----------------------------------------------- |
| otherSources | `A`  | the sources to combine the current source with. |

## Overloads

```ts
function mergeWith<T>(): OperatorFunction<T, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L67-L67)

```ts
function mergeWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, T | ObservedValueUnionFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L68-L68)

### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| otherSources | `A`  |             |
