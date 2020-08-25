---
kind: FunctionDeclaration
name: publishLast
module: operators
---

# publishLast

## description

Returns a connectable observable sequence that shares a single subscription to the
underlying sequence containing only the last notification.

![](publishLast.png)

Similar to {@link publish}, but it waits until the source observable completes and stores
the last emitted value.
Similarly to {@link publishReplay} and {@link publishBehavior}, this keeps storing the last
value even if it has no more subscribers. If subsequent subscriptions happen, they will
immediately get that last stored value and complete.

## Example

```ts
import { interval } from "rxjs";
import { publishLast, tap, take } from "rxjs/operators";

const connectable = interval(1000).pipe(
  tap((x) => console.log("side effect", x)),
  take(3),
  publishLast()
);

connectable.subscribe(
  (x) => console.log("Sub. A", x),
  (err) => console.log("Sub. A Error", err),
  () => console.log("Sub. A Complete")
);

connectable.subscribe(
  (x) => console.log("Sub. B", x),
  (err) => console.log("Sub. B Error", err),
  () => console.log("Sub. B Complete")
);

connectable.connect();

// Results:
//    "side effect 0"
//    "side effect 1"
//    "side effect 2"
//    "Sub. A 2"
//    "Sub. B 2"
//    "Sub. A Complete"
//    "Sub. B Complete"
```

```ts
function publishLast<T>(): UnaryFunction<
  Observable<T>,
  ConnectableObservable<T>
>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/publishLast.ts#L64-L66)

## see

{@link ConnectableObservable}
{@link publish}
{@link publishReplay}
{@link publishBehavior}

## return

{ConnectableObservable} An observable sequence that contains the elements of a
sequence produced by multicasting the source sequence.

## name

publishLast
