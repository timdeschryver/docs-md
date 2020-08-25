---
kind: FunctionDeclaration
name: merge
module: operators
---

# merge

```ts
function merge<T, R>(
  ...observables: Array<
    ObservableInput<any> | SchedulerLike | number | undefined
  >
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L60-L65)

## deprecated

use {@link mergeWith} or static {@link merge}

## Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

## Overloads

```ts
function merge<T>(): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L9-L9)

```ts
function merge<T, T2>(v2: ObservableInput<T2>): OperatorFunction<T, T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L11-L11)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |

```ts
function merge<T, T2, T3>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>
): OperatorFunction<T, T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L13-L13)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |

```ts
function merge<T, T2, T3, T4>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>
): OperatorFunction<T, T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L15-L15)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L17-L17)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L19-L19)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |
| v6   | `any` |             |

```ts
function merge<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L28-L28)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T>(
  concurrent: number,
  scheduler?: SchedulerLike
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L30-L30)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2>(
  v2: ObservableInput<T2>,
  scheduler: SchedulerLike
): OperatorFunction<T, T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L32-L32)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2>(
  v2: ObservableInput<T2>,
  concurrent: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L34-L34)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v2         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  scheduler: SchedulerLike
): OperatorFunction<T, T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L36-L36)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  concurrent: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L38-L38)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v2         | `any`           |             |
| v3         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  scheduler: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L40-L40)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  concurrent: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L42-L42)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  scheduler: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L44-L44)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| v5        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  concurrent: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L46-L46)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| v5         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  scheduler: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L48-L48)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| v5        | `any`           |             |
| v6        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function merge<T, T2, T3, T4, T5, T6>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  concurrent: number,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L50-L50)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| v2         | `any`           |             |
| v3         | `any`           |             |
| v4         | `any`           |             |
| v5         | `any`           |             |
| v6         | `any`           |             |
| concurrent | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function merge<T>(
  ...observables: Array<ObservableInput<T> | SchedulerLike | number>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L52-L52)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function merge<T, R>(
  ...observables: Array<ObservableInput<any> | SchedulerLike | number>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeWith.ts#L54-L54)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |
