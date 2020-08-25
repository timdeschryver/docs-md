---
kind: FunctionDeclaration
name: skipUntil
module: operators
---

# skipUntil

## description

Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.

The `skipUntil` operator causes the observable stream to skip the emission of values ​​until the passed in observable emits the first value.
This can be particularly useful in combination with user interactions, responses of http requests or waiting for specific times to pass by.

![](skipUntil.png)

Internally the `skipUntil` operator subscribes to the passed in observable (in the following called _notifier_) in order to recognize the emission
of its first value. When this happens, the operator unsubscribes from the _notifier_ and starts emitting the values of the _source_
observable. It will never let the _source_ observable emit any values if the _notifier_ completes or throws an error without emitting
a value before.

## Example

In the following example, all emitted values ​​of the interval observable are skipped until the user clicks anywhere within the page.

```ts
import { interval, fromEvent } from "rxjs";
import { skipUntil } from "rxjs/operators";

const intervalObservable = interval(1000);
const click = fromEvent(document, "click");

const emitAfterClick = intervalObservable.pipe(skipUntil(click));
// clicked at 4.6s. output: 5...6...7...8........ or
// clicked at 7.3s. output: 8...9...10..11.......
const subscribe = emitAfterClick.subscribe((value) => console.log(value));
```

```ts
function skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/skipUntil.ts#L47-L49)

## Parameters

| Name         | Type              | Description                                                                                                |
| ------------ | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| {Observable} | ``                | notifier - The second Observable that has to emit an item before the source Observable's elements begin to |
| notifier     | `Observable<any>` |                                                                                                            |

## return

{Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
an item, then emits the remaining items.

## name

skipUntil
