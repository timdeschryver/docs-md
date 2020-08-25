---
kind: FunctionDeclaration
name: refCount
module: operators
---

# refCount

## description

Make a {@link ConnectableObservable} behave like a ordinary observable and automates the way
you can connect to it.

Internally it counts the subscriptions to the observable and subscribes (only once) to the source if
the number of subscriptions is larger than 0. If the number of subscriptions is smaller than 1, it
unsubscribes from the source. This way you can make sure that everything before the _published_
refCount has only a single subscription independently of the number of subscribers to the target
observable.

Note that using the {@link share} operator is exactly the same as using the _publish_ operator
(making the observable hot) and the _refCount_ operator in a sequence.

![](refCount.png)

## Example

In the following example there are two intervals turned into connectable observables
by using the _publish_ operator. The first one uses the _refCount_ operator, the
second one does not use it. You will notice that a connectable observable does nothing
until you call its connect function.

```ts
import { interval } from "rxjs";
import { tap, publish, refCount } from "rxjs/operators";

// Turn the interval observable into a ConnectableObservable (hot)
const refCountInterval = interval(400).pipe(
  tap((num) => console.log(`refCount ${num}`)),
  publish(),
  refCount()
);

const publishedInterval = interval(400).pipe(
  tap((num) => console.log(`publish ${num}`)),
  publish()
);

refCountInterval.subscribe();
refCountInterval.subscribe();
// 'refCount 0' -----> 'refCount 1' -----> etc
// All subscriptions will receive the same value and the tap (and
// every other operator) before the publish operator will be executed
// only once per event independently of the number of subscriptions.

publishedInterval.subscribe();
// Nothing happens until you call .connect() on the observable.
```

```ts
function refCount<T>(): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/refCount.ts#L62-L66)

## see

{@link ConnectableObservable}
{@link share}
{@link publish}
