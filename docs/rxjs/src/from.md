---
kind: FunctionDeclaration
name: from
module: src
---

# from

## description

Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

<span class="informal">Converts almost anything to an Observable.</span>

![](from.png)

`from` converts various other objects and data types into Observables. It also converts a Promise, an array-like, or an
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable" target="_blank">iterable</a>
object into an Observable that emits the items in that promise, array, or iterable. A String, in this context, is treated
as an array of characters. Observable-like objects (contains a function named with the ES2015 Symbol for Observable) can also be
converted through this operator.

## Examples

### Converts an array to an Observable

```ts
import { from } from "rxjs";

const array = [10, 20, 30];
const result = from(array);

result.subscribe((x) => console.log(x));

// Logs:
// 10
// 20
// 30
```

---

### Convert an infinite iterable (from a generator) to an Observable

```ts
import { from } from "rxjs";
import { take } from "rxjs/operators";

function* generateDoubles(seed) {
  let i = seed;
  while (true) {
    yield i;
    i = 2 * i; // double it
  }
}

const iterator = generateDoubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe((x) => console.log(x));

// Logs:
// 3
// 6
// 12
// 24
// 48
// 96
// 192
// 384
// 768
// 1536
```

---

### With async scheduler

```ts
import { from, asyncScheduler } from "rxjs";

console.log("start");

const array = [10, 20, 30];
const result = from(array, asyncScheduler);

result.subscribe((x) => console.log(x));

console.log("end");

// Logs:
// start
// end
// 10
// 20
// 30
```

```ts
function from<T>(
  input: ObservableInput<T>,
  scheduler?: SchedulerLike
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/from.ts#L109-L118)

## see

{@link fromEvent}
{@link fromEventPattern}

## Parameters

| Name                 | Type            | Description                                                                    |
| -------------------- | --------------- | ------------------------------------------------------------------------------ |
| {ObservableInput<T>} | ``              | A subscription object, a Promise, an Observable-like,                          |
| {SchedulerLike}      | ``              | An optional {@link SchedulerLike} on which to schedule the emission of values. |
| input                | `any`           |                                                                                |
| scheduler            | `SchedulerLike` |                                                                                |

## return

{Observable<T>}

## name

from

## owner

Observable

## Overloads

```ts
function from<O extends ObservableInput<any>>(
  input: O
): Observable<ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/from.ts#L6-L6)

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| input | `O`  |             |

```ts
function from<O extends ObservableInput<any>>(
  input: O,
  scheduler: SchedulerLike
): Observable<ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/from.ts#L8-L8)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| input     | `O`             |             |
| scheduler | `SchedulerLike` |             |
