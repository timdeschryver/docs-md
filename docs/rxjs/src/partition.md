---
kind: FunctionDeclaration
name: partition
module: src
---

# partition

## description

Splits the source Observable into two, one with values that satisfy a
predicate, and another with values that don't satisfy the predicate.

<span class="informal">It's like {@link filter}, but returns two Observables:
one like the output of {@link filter}, and the other with values that did not
pass the condition.</span>

![](partition.png)

`partition` outputs an array with two Observables that partition the values
from the source Observable through the given `predicate` function. The first
Observable in that array emits source values for which the predicate argument
returns true. The second Observable emits source values for which the
predicate returns false. The first behaves like {@link filter} and the second
behaves like {@link filter} with the predicate negated.

## Example

Partition a set of numbers into odds and evens observables

```ts
import { of, partition } from "rxjs";

const observableValues = of(1, 2, 3, 4, 5, 6);
const [evens$, odds$] = partition(
  observableValues,
  (value, index) => value % 2 === 0
);

odds$.subscribe((x) => console.log("odds", x));
evens$.subscribe((x) => console.log("evens", x));

// Logs:
// odds 1
// odds 3
// odds 5
// evens 2
// evens 4
// evens 6
```

```ts
function partition<T>(
  source: ObservableInput<T>,
  predicate: (value: T, index: number) => boolean,
  thisArg?: any
): [Observable<T>, Observable<T>];
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/partition.ts#L58-L67)

## see

{@link filter}

## Parameters

| Name             | Type                                   | Description                                                     |
| ---------------- | -------------------------------------- | --------------------------------------------------------------- |
| {function(value: | ``                                     | T, index: number): boolean} predicate A function that           |
| {any}            | ``                                     | [thisArg] An optional argument to determine the value of `this` |
| source           | `any`                                  |                                                                 |
| predicate        | `(value: T, index: number) => boolean` |                                                                 |
| thisArg          | `any`                                  |                                                                 |

## return

{[Observable<T>, Observable<T>]} An array with two Observables: one
with values that passed the predicate, and another with values that did not
pass the predicate.
