---
kind: FunctionDeclaration
name: zipAll
module: operators
---

# zipAll

```ts
function zipAll<T, R>(
  project?: (...values: Array<any>) => R
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipAll.ts#L11-L13)

## Parameters

| Name    | Type                           | Description |
| ------- | ------------------------------ | ----------- |
| project | `(...values: Array<any>) => R` |             |

## Overloads

```ts
function zipAll<T>(): OperatorFunction<ObservableInput<T>, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipAll.ts#L6-L6)

```ts
function zipAll<T>(): OperatorFunction<any, T[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipAll.ts#L7-L7)

```ts
function zipAll<T, R>(
  project: (...values: T[]) => R
): OperatorFunction<ObservableInput<T>, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipAll.ts#L8-L8)

### Parameters

| Name    | Type                    | Description |
| ------- | ----------------------- | ----------- |
| project | `(...values: T[]) => R` |             |

```ts
function zipAll<R>(
  project: (...values: Array<any>) => R
): OperatorFunction<any, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/zipAll.ts#L9-L9)

### Parameters

| Name    | Type                           | Description |
| ------- | ------------------------------ | ----------- |
| project | `(...values: Array<any>) => R` |             |
