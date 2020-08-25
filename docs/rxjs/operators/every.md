---
kind: FunctionDeclaration
name: every
module: operators
---

# every

## description

Returns an Observable that emits whether or not every item of the source satisfies the condition specified.

<span class="informal">If all values pass predicate before the source completes, emits true before completion,
otherwise emit false, then complete.</span>

![](every.png)

## Example

A simple example emitting true if all elements are less than 5, false otherwise

```ts
import { of } from "rxjs";
import { every } from "rxjs/operators";

of(1, 2, 3, 4, 5, 6)
  .pipe(every((x) => x < 5))
  .subscribe((x) => console.log(x)); // -> false
```

```ts
function every<T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  thisArg?: any
): OperatorFunction<T, boolean>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/every.ts#L32-L35)

## Parameters

| Name       | Type                                                          | Description                                                                  |
| ---------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| {function} | ``                                                            | predicate A function for determining if an item meets a specified condition. |
| {any}      | ``                                                            | [thisArg] Optional object to use for `this` in the callback.                 |
| predicate  | `(value: T, index: number, source: Observable<T>) => boolean` |                                                                              |
| thisArg    | `any`                                                         |                                                                              |

## return

{Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.

## name

every
