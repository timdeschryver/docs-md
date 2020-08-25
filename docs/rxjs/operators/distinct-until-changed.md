---
kind: FunctionDeclaration
name: distinctUntilChanged
module: operators
---

# distinctUntilChanged

## description

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
The comparator function shourld return true if the values are the same, and false if they are different.

If a comparator function is not provided, an equality check is used by default.

## Example

A simple example with numbers

```ts
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
  .pipe(distinctUntilChanged())
  .subscribe((x) => console.log(x)); // 1, 2, 1, 2, 3, 4
```

An example using a compare function

```typescript
import { of } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

interface Person {
  age: number;
  name: string;
}

f(
  { age: 4, name: "Foo" },
  { age: 7, name: "Bar" },
  { age: 5, name: "Foo" },
  { age: 6, name: "Foo" }
)
  .pipe(distinctUntilChanged((p: Person, q: Person) => p.name === q.name))
  .subscribe((x) => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

```ts
function distinctUntilChanged<T, K>(
  compare?: (x: K, y: K) => boolean,
  keySelector?: (x: T) => K
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilChanged.ts#L66-L68)

## see

{@link distinct}
{@link distinctUntilKeyChanged}

## Parameters

| Name        | Type                      | Description                                                                                                        |
| ----------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| {function}  | ``                        | [compare] Optional comparison function called to test if an item is distinct from the previous item in the source. |
| compare     | `(x: K, y: K) => boolean` |                                                                                                                    |
| keySelector | `(x: T) => K`             |                                                                                                                    |

## return

{Observable} An Observable that emits items from the source Observable with distinct values.

## name

distinctUntilChanged

## Overloads

```ts
function distinctUntilChanged<T>(
  compare?: (x: T, y: T) => boolean
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilChanged.ts#L8-L8)

### Parameters

| Name    | Type                      | Description |
| ------- | ------------------------- | ----------- |
| compare | `(x: T, y: T) => boolean` |             |

```ts
function distinctUntilChanged<T, K>(
  compare: (x: K, y: K) => boolean,
  keySelector: (x: T) => K
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilChanged.ts#L9-L9)

### Parameters

| Name        | Type                      | Description |
| ----------- | ------------------------- | ----------- |
| compare     | `(x: K, y: K) => boolean` |             |
| keySelector | `(x: T) => K`             |             |