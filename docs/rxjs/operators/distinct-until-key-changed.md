---
kind: FunctionDeclaration
name: distinctUntilKeyChanged
module: operators
---

# distinctUntilKeyChanged

## description

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
using a property accessed by using the key provided to check if the two items are distinct.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.

If a comparator function is not provided, an equality check is used by default.

## Examples

An example comparing the name of persons

```typescript
import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
  .pipe(distinctUntilKeyChanged("name"))
  .subscribe((x) => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
```

An example comparing the first letters of the name

```typescript
import { of } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Person {
  age: number;
  name: string;
}

f(
  { age: 4, name: "Foo1" },
  { age: 7, name: "Bar" },
  { age: 5, name: "Foo2" },
  { age: 6, name: "Foo3" }
)
  .pipe(
    distinctUntilKeyChanged(
      "name",
      (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)
    )
  )
  .subscribe((x) => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }
```

```ts
function distinctUntilKeyChanged<T, K extends keyof T>(
  key: K,
  compare?: (x: T[K], y: T[K]) => boolean
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilKeyChanged.ts#L78-L80)

## see

{@link distinct}
{@link distinctUntilChanged}

## Parameters

| Name       | Type                            | Description                                                                                                        |
| ---------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| {string}   | ``                              | key String key for object property lookup on each item.                                                            |
| {function} | ``                              | [compare] Optional comparison function called to test if an item is distinct from the previous item in the source. |
| key        | `K`                             |                                                                                                                    |
| compare    | `(x: T[K], y: T[K]) => boolean` |                                                                                                                    |

## return

{Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.

## name

distinctUntilKeyChanged

## Overloads

```ts
function distinctUntilKeyChanged<T>(key: keyof T): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilKeyChanged.ts#L5-L5)

### Parameters

| Name | Type      | Description |
| ---- | --------- | ----------- |
| key  | `keyof T` |             |

```ts
function distinctUntilKeyChanged<T, K extends keyof T>(
  key: K,
  compare: (x: T[K], y: T[K]) => boolean
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/distinctUntilKeyChanged.ts#L6-L6)

### Parameters

| Name    | Type                            | Description |
| ------- | ------------------------------- | ----------- |
| key     | `K`                             |             |
| compare | `(x: T[K], y: T[K]) => boolean` |             |
