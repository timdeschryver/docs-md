---
kind: FunctionDeclaration
name: race
module: operators
---

# race

## description

Returns an Observable that mirrors the first source Observable to emit a next,
error or complete notification from the combination of this Observable and supplied Observables.

```ts
function race<T, R>(
  ...observables: ObservableInput<R>[]
): OperatorFunction<T, (T | R)[]>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L26-L34)

## Parameters

| Name             | Type    | Description                                                           |
| ---------------- | ------- | --------------------------------------------------------------------- |
| {...Observables} | ``      | ...observables Sources used to race for which Observable emits first. |
| observables      | `any[]` |                                                                       |

## return

{Observable} An Observable that mirrors the output of the first Observable to emit an item.

## deprecated

Deprecated use {@link raceWith}

## Overloads

```ts
function race<T>(
  observables: Array<Observable<T>>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L10-L10)

### Parameters

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| observables | `Observable<T>[]` |             |

```ts
function race<T, R>(observables: Array<Observable<T>>): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L12-L12)

### Parameters

| Name        | Type              | Description |
| ----------- | ----------------- | ----------- |
| observables | `Observable<T>[]` |             |

```ts
function race<T>(
  ...observables: Array<Observable<T> | Array<Observable<T>>>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L14-L14)

### Parameters

| Name        | Type            | Description         |
| ----------- | --------------- | ------------------- |
| observables | `(Observable<T> | Observable<T>[])[]` |  |

```ts
function race<T, R>(
  ...observables: Array<Observable<any> | Array<Observable<any>>>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/raceWith.ts#L16-L16)

### Parameters

| Name        | Type              | Description           |
| ----------- | ----------------- | --------------------- |
| observables | `(Observable<any> | Observable<any>[])[]` |  |
