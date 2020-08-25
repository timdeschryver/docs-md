---
kind: FunctionDeclaration
name: startWith
module: operators
---

# startWith

## description

Returns an observable that, at the moment of subscription, will synchronously emit all
values provided to this operator, then subscribe to the source and mirror all of its emissions
to subscribers.

This is a useful way to know when subscription has occurred on an existing observable.

<span class="informal">First emits its arguments in order, and then any
emissions from the source.</span>

![](startWith.png)

## Examples

Emit a value when a timer starts.

```ts
import { timer } from "rxjs";
import { startWith, map } from "rxjs/operators";

timer(1000)
  .pipe(
    map(() => "timer emit"),
    startWith("timer start")
  )
  .subscribe((x) => console.log(x));

// results:
// "timer start"
// "timer emit"
```

```ts
function startWith<T, D>(...values: D[]): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L62-L71)

## Parameters

| Name   | Type  | Description                                           |
| ------ | ----- | ----------------------------------------------------- |
| values | `D[]` | Items you want the modified Observable to emit first. |

## see

endWith
finalize
concat

## Overloads

```ts
function startWith<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L8-L8)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D>(
  v1: D,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L10-L10)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D, E>(
  v1: D,
  v2: E,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D | E>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L12-L12)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| v2        | `E`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D, E, F>(
  v1: D,
  v2: E,
  v3: F,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D | E | F>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L14-L14)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| v2        | `E`             |             |
| v3        | `F`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D, E, F, G>(
  v1: D,
  v2: E,
  v3: F,
  v4: G,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D | E | F | G>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L16-L16)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| v2        | `E`             |             |
| v3        | `F`             |             |
| v4        | `G`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D, E, F, G, H>(
  v1: D,
  v2: E,
  v3: F,
  v4: G,
  v5: H,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D | E | F | G | H>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L18-L18)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| v2        | `E`             |             |
| v3        | `F`             |             |
| v4        | `G`             |             |
| v5        | `H`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, D, E, F, G, H, I>(
  v1: D,
  v2: E,
  v3: F,
  v4: G,
  v5: H,
  v6: I,
  scheduler: SchedulerLike
): OperatorFunction<T, T | D | E | F | G | H | I>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L20-L20)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `D`             |             |
| v2        | `E`             |             |
| v3        | `F`             |             |
| v4        | `G`             |             |
| v5        | `H`             |             |
| v6        | `I`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function startWith<T, A extends any[] = T[]>(
  ...values: A
): OperatorFunction<T, T | ValueFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts#L22-L22)

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| values | `A`  |             |
