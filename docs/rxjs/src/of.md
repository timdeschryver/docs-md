---
kind: FunctionDeclaration
name: of
module: src
---

# of

## description

Converts the arguments to an observable sequence.

<span class="informal">Each argument becomes a `next` notification.</span>

![](of.png)

Unlike {@link from}, it does not do any flattening and emits each argument in whole
as a separate `next` notification.

## Examples

Emit the values `10, 20, 30`

```ts
import { of } from "rxjs";

of(10, 20, 30).subscribe(
  (next) => console.log("next:", next),
  (err) => console.log("error:", err),
  () => console.log("the end")
);

// Outputs
// next: 10
// next: 20
// next: 30
// the end
```

Emit the array `[1, 2, 3]`

```ts
import { of } from "rxjs";

of([1, 2, 3]).subscribe(
  (next) => console.log("next:", next),
  (err) => console.log("error:", err),
  () => console.log("the end")
);

// Outputs
// next: [1, 2, 3]
// the end
```

```ts
function of<T>(...args: Array<T | SchedulerLike>): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L99-L107)

## see

{@link from}
{@link range}

## Parameters

| Name   | Type | Description                                                       |
| ------ | ---- | ----------------------------------------------------------------- |
| {...T} | ``   | values A comma separated list of arguments you want to be emitted |
| args   | `(T  | SchedulerLike)[]`                                                 |  |

## return

{Observable} An Observable that emits the arguments
described above and then completes.

## name

of

## Overloads

```ts
function of(scheduler: SchedulerLike): Observable<never>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L9-L9)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| scheduler | `SchedulerLike` |             |

```ts
function of<T>(a: T, scheduler: SchedulerLike): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L11-L11)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2>(a: T, b: T2, scheduler: SchedulerLike): Observable<T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L13-L13)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3>(
  a: T,
  b: T2,
  c: T3,
  scheduler: SchedulerLike
): Observable<T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L15-L15)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L17-L17)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4, T5>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L19-L19)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| e         | `T5`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4, T5, T6>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L21-L21)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| e         | `T5`            |             |
| f         | `T6`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4, T5, T6, T7>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L23-L24)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| e         | `T5`            |             |
| f         | `T6`            |             |
| g         | `T7`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4, T5, T6, T7, T8>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L26-L27)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| e         | `T5`            |             |
| f         | `T6`            |             |
| g         | `T7`            |             |
| h         | `T8`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(
  a: T,
  b: T2,
  c: T3,
  d: T4,
  e: T5,
  f: T6,
  g: T7,
  h: T8,
  i: T9,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L29-L30)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| a         | `T`             |             |
| b         | `T2`            |             |
| c         | `T3`            |             |
| d         | `T4`            |             |
| e         | `T5`            |             |
| f         | `T6`            |             |
| g         | `T7`            |             |
| h         | `T8`            |             |
| i         | `T9`            |             |
| scheduler | `SchedulerLike` |             |

```ts
function of(): Observable<never>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L33-L33)

```ts
function of<T>(): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L35-L35)

```ts
function of<T>(value: T): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L36-L36)

### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |

```ts
function of<T, U>(value1: T, value2: U): Observable<T | U>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L37-L37)

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| value1 | `T`  |             |
| value2 | `U`  |             |

```ts
function of<T, U, V>(value1: T, value2: U, value3: V): Observable<T | U | V>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L38-L38)

### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| value1 | `T`  |             |
| value2 | `U`  |             |
| value3 | `V`  |             |

```ts
function of<A extends Array<any>>(...args: A): Observable<ValueFromArray<A>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/of.ts#L39-L39)

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | `A`  |             |
