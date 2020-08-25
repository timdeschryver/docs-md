---
kind: FunctionDeclaration
name: min
module: operators
---

# min

## description

The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
and when source Observable completes it emits a single item: the item with the smallest value.

![](min.png)

## Examples

Get the minimal value of a series of numbers

```ts
import { of } from "rxjs";
import { min } from "rxjs/operators";

of(5, 4, 7, 2, 8)
  .pipe(min())
  .subscribe((x) => console.log(x)); // -> 2
```

Use a comparer function to get the minimal item

```typescript
import { of } from "rxjs";
import { min } from "rxjs/operators";

interface Person {
  age: number;
  name: string;
}
f({ age: 7, name: "Foo" }, { age: 5, name: "Bar" }, { age: 9, name: "Beer" })
  .pipe(
    min<Person>((a: Person, b: Person) => (a.age < b.age ? -1 : 1))
  )
  .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
```

```ts
function min<T>(comparer?: (x: T, y: T) => number): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/min.ts#L47-L52)

## see

{@link max}

## Parameters

| Name       | Type                     | Description                                                                                    |
| ---------- | ------------------------ | ---------------------------------------------------------------------------------------------- |
| {Function} | ``                       | [comparer] - Optional comparer function that it will use instead of its default to compare the |
| comparer   | `(x: T, y: T) => number` |                                                                                                |

## return

{Observable<R>} An Observable that emits item with the smallest value.

## name

min
