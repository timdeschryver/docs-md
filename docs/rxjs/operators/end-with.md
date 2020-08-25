---
kind: FunctionDeclaration
name: endWith
module: operators
---

# endWith

## description

Returns an observable that will emit all values from the source, then synchronously emit
he provided value(s) immediately after the source completes.

NOTE: Passing a last argument of a Scheduler is _deprecated_, and may result in incorrect
types in TypeScript.

This is useful for knowing when an observable ends. Particularly when paired with an
operator like {@link takeUntil}

![](endWith.png)

## Example

Emit values to know when an interval starts and stops. The interval will
stop when a user clicks anywhere on the document.

```ts
import { interval, fromEvent } from 'rxjs';
import { map, startWith, takeUntil, endWith } from 'rxjs/operators';

const ticker$ = interval(5000).pipe(
map(() => 'tick'),
);

const documentClicks$ = fromEvent(document, 'click');

ticker$.pipe(
startWith('interval started'),
takeUntil(documentClicks$),
endWith('interval ended by click'),
)
.subscribe(
x = console.log(x);
)

// Result (assuming a user clicks after 15 seconds)
// "interval started"
// "tick"
// "tick"
// "tick"
// "interval ended by click"
```

```ts
function endWith<T>(
  ...values: Array<T | SchedulerLike>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L76-L78)

## Parameters

| Name   | Type | Description       |
| ------ | ---- | ----------------- |
| values | `(T  | SchedulerLike)[]` | - Items you want the modified Observable to emit last. |

## see

startWith
concat
takeUntil

## Overloads

```ts
function endWith<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L8-L8)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A>(
  v1: A,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L10-L10)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A, B>(
  v1: A,
  v2: B,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A | B>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L12-L12)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| v2        | `B`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A, B, C>(
  v1: A,
  v2: B,
  v3: C,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A | B | C>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L14-L14)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| v2        | `B`             |             |
| v3        | `C`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A, B, C, D>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A | B | C | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L16-L16)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| v2        | `B`             |             |
| v3        | `C`             |             |
| v4        | `D`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A, B, C, D, E>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  v5: E,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A | B | C | D | E>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L18-L18)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| v2        | `B`             |             |
| v3        | `C`             |             |
| v4        | `D`             |             |
| v5        | `E`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A, B, C, D, E, F>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  v5: E,
  v6: F,
  scheduler: SchedulerLike
): OperatorFunction<T, T | A | B | C | D | E | F>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L20-L20)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `A`             |             |
| v2        | `B`             |             |
| v3        | `C`             |             |
| v4        | `D`             |             |
| v5        | `E`             |             |
| v6        | `F`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function endWith<T, A extends any[] = T[]>(
  ...args: A
): OperatorFunction<T, T | ValueFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/endWith.ts#L22-L22)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | `A`  |             |
