---
kind: FunctionDeclaration
name: last
module: operators
---

# last

## description

Returns an Observable that emits only the last item emitted by the source Observable.
It optionally takes a predicate function as a parameter, in which case, rather than emitting
the last item from the source Observable, the resulting Observable will emit the last item
from the source Observable that satisfies the predicate.

![](last.png)

```ts
function last<T, D>(
  predicate?:
    | ((value: T, index: number, source: Observable<T>) => boolean)
    | null,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/last.ts#L42-L52)

## throws

{EmptyError} Delivers an EmptyError to the Observer's `error`
callback if the Observable completes before any `next` notification was sent.

- Throws if no items that match the predicate are emitted by the source Observable.

## Parameters

| Name         | Type                                                          | Description                                                         |
| ------------ | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| {function}   | ``                                                            | [predicate] - The condition any source emitted item has to satisfy. |
| {any}        | ``                                                            | [defaultValue] - An optional default value to provide if last       |
| predicate    | `(value: T, index: number, source: Observable<T>) => boolean` |                                                                     |
| defaultValue | `D`                                                           |                                                                     |

## return

{Observable} An Observable that emits only the last item satisfying the given condition
from the source, or an NoSuchElementException if no such items are emitted.

## Overloads

```ts
function last<T, D = T>(
  predicate?: null,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/last.ts#L11-L14)

### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| predicate    | `null` |             |
| defaultValue | `D`    |             |

```ts
function last<T, S extends T>(
  predicate: (value: T, index: number, source: Observable<T>) => value is S,
  defaultValue?: S
): OperatorFunction<T, S>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/last.ts#L15-L18)

### Parameters

| Name         | Type                                                             | Description |
| ------------ | ---------------------------------------------------------------- | ----------- |
| predicate    | `(value: T, index: number, source: Observable<T>) => value is S` |             |
| defaultValue | `S`                                                              |             |

```ts
function last<T, D = T>(
  predicate: (value: T, index: number, source: Observable<T>) => boolean,
  defaultValue?: D
): OperatorFunction<T, T | D>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/last.ts#L19-L22)

### Parameters

| Name         | Type                                                          | Description |
| ------------ | ------------------------------------------------------------- | ----------- |
| predicate    | `(value: T, index: number, source: Observable<T>) => boolean` |             |
| defaultValue | `D`                                                           |             |
