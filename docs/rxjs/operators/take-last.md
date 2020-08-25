---
kind: FunctionDeclaration
name: takeLast
module: operators
---

# takeLast

## description

Emits only the last `count` values emitted by the source Observable.

<span class="informal">Remembers the latest `count` values, then emits those
only when the source completes.</span>

![](takeLast.png)

`takeLast` returns an Observable that emits at most the last `count` values
emitted by the source Observable. If the source emits fewer than `count`
values then all of its values are emitted. This operator must wait until the
`complete` notification emission from the source in order to emit the `next`
values on the output Observable, because otherwise it is impossible to know
whether or not more values will be emitted on the source. For this reason,
all values are emitted synchronously, followed by the complete notification.

## Example

Take the last 3 values of an Observable with many values

```ts
import { range } from "rxjs";
import { takeLast } from "rxjs/operators";

const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe((x) => console.log(x));
```

```ts
function takeLast<T>(count: number): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeLast.ts#L50-L65)

## see

{@link take}
{@link takeUntil}
{@link takeWhile}
{@link skip}

## throws

{ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
{TypeError} If the count is not provided or is not a number.

## Parameters

| Name  | Type     | Description                                          |
| ----- | -------- | ---------------------------------------------------- |
| count | `number` | The maximum number of values to emit from the end of |

## return

An Observable that emits at most the last count
values emitted by the source Observable.
