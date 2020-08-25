---
kind: FunctionDeclaration
name: raceWith
module: operators
---

# raceWith

## description

Creates an Observable that mirrors the first source Observable to emit a next,
error or complete notification from the combination of the Observable to which
the operator is applied and supplied Observables.

## Example

```ts
import { interval } from "rxjs";
import { mapTo, raceWith } from "rxjs/operators";

const obs1 = interval(1000).pipe(mapTo("fast one"));
const obs2 = interval(3000).pipe(mapTo("medium one"));
const obs3 = interval(5000).pipe(mapTo("slow one"));

obs2.pipe(raceWith(obs3, obs1)).subscribe((winner) => console.log(winner));

// Outputs
// a series of 'fast one'
```

```ts
function raceWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, T | ObservedValueUnionFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L64-L77)

## Parameters

| Name         | Type | Description                                            |
| ------------ | ---- | ------------------------------------------------------ |
| otherSources | `A`  | Sources used to race for which Observable emits first. |
