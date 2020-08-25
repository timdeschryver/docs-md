---
kind: FunctionDeclaration
name: publishBehavior
module: operators
---

# publishBehavior

```ts
function publishBehavior<T>(
  value: T
): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishBehavior.ts#L12-L14)

## Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |

## return

{ConnectableObservable<T>}

## name

publishBehavior
