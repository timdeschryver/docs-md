---
kind: FunctionDeclaration
name: concat
module: operators
---

# concat

```ts
function concat<T, R>(
  ...observables: Array<ObservableInput<any> | SchedulerLike | undefined>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L28-L33)

## deprecated

remove in v8. Use {@link concatWith}

## Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

## Overloads

```ts
function concat<T>(scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L8-L8)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| scheduler | `SchedulerLike` |             |

```ts
function concat<T, T2>(
  v2: ObservableInput<T2>,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L10-L10)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function concat<T, T2, T3>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L12-L12)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function concat<T, T2, T3, T4>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L14-L14)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function concat<T, T2, T3, T4, T5>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L16-L16)

### Parameters

| Name      | Type            | Description |
| --------- | --------------- | ----------- |
| v2        | `any`           |             |
| v3        | `any`           |             |
| v4        | `any`           |             |
| v5        | `any`           |             |
| scheduler | `SchedulerLike` |             |

```ts
function concat<T, T2, T3, T4, T5, T6>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  scheduler?: SchedulerLike
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L18-L18)

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
function concat<T>(
  ...observables: Array<ObservableInput<T> | SchedulerLike>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L20-L20)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function concat<T, R>(
  ...observables: Array<ObservableInput<any> | SchedulerLike>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/concat.ts#L22-L22)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |
