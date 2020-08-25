---
kind: FunctionDeclaration
name: publishReplay
module: operators
---

# publishReplay

```ts
function publishReplay<T, R>(
  bufferSize?: number,
  windowTime?: number,
  selectorOrScheduler?: SchedulerLike | OperatorFunction<T, R>,
  scheduler?: SchedulerLike
): UnaryFunction<Observable<T>, ConnectableObservable<R>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishReplay.ts#L12-L25)

## Parameters

| Name                | Type            | Description             |
| ------------------- | --------------- | ----------------------- |
| bufferSize          | `number`        |                         |
| windowTime          | `number`        |                         |
| selectorOrScheduler | `SchedulerLike  | OperatorFunction<T, R>` |  |
| scheduler           | `SchedulerLike` |                         |

## Overloads

```ts
function publishReplay<T>(
  bufferSize?: number,
  windowTime?: number,
  scheduler?: SchedulerLike
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishReplay.ts#L8-L8)

### Parameters

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| bufferSize | `number`        |             |
| windowTime | `number`        |             |
| scheduler  | `SchedulerLike` |             |

```ts
function publishReplay<T, O extends ObservableInput<any>>(
  bufferSize?: number,
  windowTime?: number,
  selector?: (shared: Observable<T>) => O,
  scheduler?: SchedulerLike
): OperatorFunction<T, ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishReplay.ts#L9-L9)

### Parameters

| Name       | Type                           | Description |
| ---------- | ------------------------------ | ----------- |
| bufferSize | `number`                       |             |
| windowTime | `number`                       |             |
| selector   | `(shared: Observable<T>) => O` |             |
| scheduler  | `SchedulerLike`                |             |
