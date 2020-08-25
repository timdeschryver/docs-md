---
kind: FunctionDeclaration
name: zip
module: operators
---

# zip

```ts
function zip<T, R>(
  ...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L40-L47)

## deprecated

Deprecated. Use {@link zipWith}.

## Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

## Overloads

```ts
function zip<T, R>(project: (v1: T) => R): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L8-L8)

### Parameters

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| project | `(v1: T) => R` |             |

```ts
function zip<T, T2, R>(
  v2: ObservableInput<T2>,
  project: (v1: T, v2: T2) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L10-L10)

### Parameters

| Name    | Type                   | Description |
| ------- | ---------------------- | ----------- |
| v2      | `any`                  |             |
| project | `(v1: T, v2: T2) => R` |             |

```ts
function zip<T, T2, T3, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  project: (v1: T, v2: T2, v3: T3) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L12-L12)

### Parameters

| Name    | Type                           | Description |
| ------- | ------------------------------ | ----------- |
| v2      | `any`                          |             |
| v3      | `any`                          |             |
| project | `(v1: T, v2: T2, v3: T3) => R` |             |

```ts
function zip<T, T2, T3, T4, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  project: (v1: T, v2: T2, v3: T3, v4: T4) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L14-L14)

### Parameters

| Name    | Type                                   | Description |
| ------- | -------------------------------------- | ----------- |
| v2      | `any`                                  |             |
| v3      | `any`                                  |             |
| v4      | `any`                                  |             |
| project | `(v1: T, v2: T2, v3: T3, v4: T4) => R` |             |

```ts
function zip<T, T2, T3, T4, T5, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L16-L16)

### Parameters

| Name    | Type                                           | Description |
| ------- | ---------------------------------------------- | ----------- |
| v2      | `any`                                          |             |
| v3      | `any`                                          |             |
| v4      | `any`                                          |             |
| v5      | `any`                                          |             |
| project | `(v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R` |             |

```ts
function zip<T, T2, T3, T4, T5, T6, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>,
  project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L18-L18)

### Parameters

| Name    | Type                                                   | Description |
| ------- | ------------------------------------------------------ | ----------- |
| v2      | `any`                                                  |             |
| v3      | `any`                                                  |             |
| v4      | `any`                                                  |             |
| v5      | `any`                                                  |             |
| v6      | `any`                                                  |             |
| project | `(v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R` |             |

```ts
function zip<T, T2>(v2: ObservableInput<T2>): OperatorFunction<T, [T, T2]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L20-L20)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |

```ts
function zip<T, T2, T3>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>
): OperatorFunction<T, [T, T2, T3]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L22-L22)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |

```ts
function zip<T, T2, T3, T4>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>
): OperatorFunction<T, [T, T2, T3, T4]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L24-L24)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |

```ts
function zip<T, T2, T3, T4, T5>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>
): OperatorFunction<T, [T, T2, T3, T4, T5]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L26-L26)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |

```ts
function zip<T, T2, T3, T4, T5, T6>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>
): OperatorFunction<T, [T, T2, T3, T4, T5, T6]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L28-L28)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |
| v6   | `any` |             |

```ts
function zip<T, R>(
  ...observables: Array<ObservableInput<T> | ((...values: Array<T>) => R)>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L30-L30)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function zip<T, R>(array: Array<ObservableInput<T>>): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L32-L32)

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| array | `any[]` |             |

```ts
function zip<T, TOther, R>(
  array: Array<ObservableInput<TOther>>,
  project: (v1: T, ...values: Array<TOther>) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipWith.ts#L34-L34)

### Parameters

| Name    | Type                                     | Description |
| ------- | ---------------------------------------- | ----------- |
| array   | `any[]`                                  |             |
| project | `(v1: T, ...values: Array<TOther>) => R` |             |
