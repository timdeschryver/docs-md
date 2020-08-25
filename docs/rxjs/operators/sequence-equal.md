---
kind: FunctionDeclaration
name: sequenceEqual
module: operators
---

# sequenceEqual

## description

Compares all values of two observables in sequence using an optional comparator function
and returns an observable of a single boolean value representing whether or not the two sequences
are equal.

<span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>

![](sequenceEqual.png)

`sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
observables completes, the operator will wait for the other observable to complete; If the other
observable emits before completing, the returned observable will emit `false` and complete. If one observable never
completes or emits after the other completes, the returned observable will never complete.

## Example

figure out if the Konami code matches

```ts
import { from, fromEvent } from "rxjs";
import { sequenceEqual, bufferCount, mergeMap, map } from "rxjs/operators";

const codes = from([
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
  "Enter", // no start key, clearly.
]);

const keys = fromEvent(document, "keyup").pipe(map((e) => e.code));
const matches = keys.pipe(
  bufferCount(11, 1),
  mergeMap((last11) => from(last11).pipe(sequenceEqual(codes)))
);
matches.subscribe((matched) =>
  console.log("Successful cheat at Contra? ", matched)
);
```

```ts
function sequenceEqual<T>(
  compareTo: Observable<T>,
  comparator?: (a: T, b: T) => boolean
): OperatorFunction<T, boolean>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/sequenceEqual.ts#L65-L68)

## see

{@link combineLatest}
{@link zip}
{@link withLatestFrom}

## Parameters

| Name         | Type                      | Description                                                          |
| ------------ | ------------------------- | -------------------------------------------------------------------- |
| {Observable} | ``                        | compareTo The observable sequence to compare the source sequence to. |
| {function}   | ``                        | [comparator] An optional function to compare each value pair         |
| compareTo    | `Observable<T>`           |                                                                      |
| comparator   | `(a: T, b: T) => boolean` |                                                                      |

## return

{Observable} An Observable of a single boolean value representing whether or not
the values emitted by both observables were equal in sequence.

## name

sequenceEqual
