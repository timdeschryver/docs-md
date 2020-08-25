---
kind: FunctionDeclaration
name: multicast
module: operators
---

# multicast

## description

Returns an Observable that emits the results of invoking a specified selector on items
emitted by a ConnectableObservable that shares a single subscription to the underlying stream.

![](multicast.png)

```ts
function multicast<T, R>(
  subjectOrSubjectFactory: Subject<T> | (() => Subject<T>),
  selector?: (source: Observable<T>) => Observable<R>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/multicast.ts#L34-L56)

## Parameters

| Name                    | Type                                       | Description                                                                        |
| ----------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| {Function               | Subject}                                   | ``                                                                                 | subjectOrSubjectFactory - Factory function to create an intermediate subject through |
| {Function}              | ``                                         | [selector] - Optional selector function that can use the multicasted source stream |
| subjectOrSubjectFactory | `Subject<T>                                | (() => Subject<T>)`                                                                |  |
| selector                | `(source: Observable<T>) => Observable<R>` |                                                                                    |

## return

{Observable} An Observable that emits the results of invoking the selector
on the items emitted by a `ConnectableObservable` that shares a single subscription to
the underlying stream.

## name

multicast

## Overloads

```ts
function multicast<T>(
  subject: Subject<T>
): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/multicast.ts#L10-L10)

### Parameters

| Name    | Type         | Description |
| ------- | ------------ | ----------- |
| subject | `Subject<T>` |             |

```ts
function multicast<T, O extends ObservableInput<any>>(
  subject: Subject<T>,
  selector: (shared: Observable<T>) => O
): UnaryFunction<Observable<T>, ConnectableObservable<ObservedValueOf<O>>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/multicast.ts#L11-L11)

### Parameters

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| subject  | `Subject<T>`                   |             |
| selector | `(shared: Observable<T>) => O` |             |

```ts
function multicast<T>(
  subjectFactory: (this: Observable<T>) => Subject<T>
): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/multicast.ts#L12-L12)

### Parameters

| Name           | Type                                  | Description |
| -------------- | ------------------------------------- | ----------- |
| subjectFactory | `(this: Observable<T>) => Subject<T>` |             |

```ts
function multicast<T, O extends ObservableInput<any>>(
  SubjectFactory: (this: Observable<T>) => Subject<T>,
  selector: (shared: Observable<T>) => O
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/multicast.ts#L13-L13)

### Parameters

| Name           | Type                                  | Description |
| -------------- | ------------------------------------- | ----------- |
| SubjectFactory | `(this: Observable<T>) => Subject<T>` |             |
| selector       | `(shared: Observable<T>) => O`        |             |
