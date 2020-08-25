---
kind: FunctionDeclaration
name: merge
module: src
---

# merge

## description

Creates an output Observable which concurrently emits all values from every
given input Observable.

<span class="informal">Flattens multiple Observables together by blending
their values into one Observable.</span>

![](merge.png)

`merge` subscribes to each given input Observable (as arguments), and simply
forwards (without doing any transformation) all the values from all the input
Observables to the output Observable. The output Observable only completes
once all input Observables have completed. Any error delivered by an input
Observable will be immediately emitted on the output Observable.

## Examples

### Merge together two Observables: 1s interval and clicks

```ts
import { merge, fromEvent, interval } from "rxjs";

const clicks = fromEvent(document, "click");
const timer = interval(1000);
const clicksOrTimer = merge(clicks, timer);
clicksOrTimer.subscribe((x) => console.log(x));

// Results in the following:
// timer will emit ascending values, one every second(1000ms) to console
// clicks logs MouseEvents to console everytime the "document" is clicked
// Since the two streams are merged you see these happening
// as they occur.
```

### Merge together 3 Observables, but only 2 run concurrently

```ts
import { merge, interval } from "rxjs";
import { take } from "rxjs/operators";

const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe((x) => console.log(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits its max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits its max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
```

```ts
function merge<T, R>(
  ...observables: Array<
    ObservableInput<any> | SchedulerLike | number | undefined
  >
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L122-L140)

## see

{@link mergeAll}
{@link mergeMap}
{@link mergeMapTo}
{@link mergeScan}

## Parameters

| Name                 | Type    | Description                                                    |
| -------------------- | ------- | -------------------------------------------------------------- |
| {...ObservableInput} | ``      | observables Input Observables to merge together.               |
| {number}             | ``      | [concurrent=Infinity] Maximum number of input                  |
| {SchedulerLike}      | ``      | [scheduler=null] The {@link SchedulerLike} to use for managing |
| observables          | `any[]` |                                                                |

## return

{Observable} an Observable that emits items that are the result of
every input Observable.

## static

true

## name

merge

## owner

Observable

## Overloads

```ts
function merge<T>(
  v1: ObservableInput<T>,
  scheduler: SchedulerLike
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L9-L9)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T>(
  v1: ObservableInput<T>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L11-L11)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  scheduler: SchedulerLike
): Observable<T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L13-L13)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| v2        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L15-L15)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| v2         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  scheduler: SchedulerLike
): Observable<T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L17-L17)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| v2        | `any`           |             |
| v3        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L19-L19)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| v2         | `any`           |             |
| v3         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L21-L21)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L23-L23)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L25-L25)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| v5        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L27-L27)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| v5         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L29-L29)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v1        | `any`           |             |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| v5        | `any`           |             |
| v6        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  concurrent: number,
  scheduler: SchedulerLike
): Observable<T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L31-L31)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v1         | `any`           |             |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| v5         | `any`           |             |
| v6         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T>(v1: ObservableInput<T>): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L33-L33)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |

```ts
function merge<T>(v1: ObservableInput<T>, concurrent?: number): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L34-L34)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T, T2>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>
): Observable<T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L35-L35)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |
| v2   | `any` |             |

```ts
function merge<T, T2>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  concurrent?: number
): Observable<T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L36-L36)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| v2         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T, T2, T3>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>
): Observable<T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L37-L37)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |

```ts
function merge<T, T2, T3>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  concurrent?: number
): Observable<T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L38-L38)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| v2         | `any`    |             |
| v3         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T, T2, T3, T4>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>
): Observable<T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L39-L39)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |

```ts
function merge<T, T2, T3, T4>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  concurrent?: number
): Observable<T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L40-L40)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| v2         | `any`    |             |
| v3         | `any`    |             |
| v4         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>
): Observable<T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L41-L41)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  concurrent?: number
): Observable<T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L42-L42)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| v2         | `any`    |             |
| v3         | `any`    |             |
| v4         | `any`    |             |
| v5         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>
): Observable<T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L43-L43)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v1   | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |
| v6   | `any` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v1: ObservableInput<T>,
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  concurrent?: number
): Observable<T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L44-L44)

### Parameters

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| v1         | `any`    |             |
| v2         | `any`    |             |
| v3         | `any`    |             |
| v4         | `any`    |             |
| v5         | `any`    |             |
| v6         | `any`    |             |
| concurrent | `number` |             |

```ts
function merge<T>(
  ...observables: (ObservableInput<T> | number)[]
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L45-L45)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function merge<T>(
  ...observables: (ObservableInput<T> | SchedulerLike | number)[]
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L47-L47)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function merge<T, R>(
  ...observables: (ObservableInput<any> | number)[]
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L48-L48)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function merge<T, R>(
  ...observables: (ObservableInput<any> | SchedulerLike | number)[]
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/merge.ts#L50-L50)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |
