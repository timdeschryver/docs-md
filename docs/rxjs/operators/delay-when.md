---
kind: FunctionDeclaration
name: delayWhen
module: operators
---

# delayWhen

## description

Delays the emission of items from the source Observable by a given time span
determined by the emissions of another Observable.

<span class="informal">It's like {@link delay}, but the time span of the
delay duration is determined by a second Observable.</span>

![](delayWhen.png)

`delayWhen` time shifts each emitted value from the source Observable by a
time span determined by another Observable. When the source emits a value,
the `delayDurationSelector` function is called with the source value as
argument, and should return an Observable, called the "duration" Observable.
The source value is emitted on the output Observable only when the duration
Observable emits a value or completes.
The completion of the notifier triggering the emission of the source value
is deprecated behavior and will be removed in future versions.

Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
is an Observable. When `subscriptionDelay` emits its first value or
completes, the source Observable is subscribed to and starts behaving like
described in the previous paragraph. If `subscriptionDelay` is not provided,
`delayWhen` will subscribe to the source Observable as soon as the output
Observable is subscribed.

## Example

Delay each click by a random amount of time, between 0 and 5 seconds

```ts
import { fromEvent, interval } from "rxjs";
import { delayWhen } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const delayedClicks = clicks.pipe(
  delayWhen((event) => interval(Math.random() * 5000))
);
delayedClicks.subscribe((x) => console.log(x));
```

```ts
function delayWhen<T>(
  delayDurationSelector: (value: T, index: number) => Observable<any>,
  subscriptionDelay?: Observable<any>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/delayWhen.ts#L74-L81)

## see

{@link delay}
{@link throttle}
{@link throttleTime}
{@link debounce}
{@link debounceTime}
{@link sample}
{@link sampleTime}
{@link audit}
{@link auditTime}

## Parameters

| Name                  | Type                                           | Description                                                          |
| --------------------- | ---------------------------------------------- | -------------------------------------------------------------------- |
| {function(value:      | ``                                             | T, index: number): Observable} delayDurationSelector A function that |
| {Observable}          | ``                                             | subscriptionDelay An Observable that triggers the                    |
| delayDurationSelector | `(value: T, index: number) => Observable<any>` |                                                                      |
| subscriptionDelay     | `Observable<any>`                              |                                                                      |

## return

{Observable} An Observable that delays the emissions of the source
Observable by an amount of time specified by the Observable returned by
`delayDurationSelector`.

## name

delayWhen

## Overloads

```ts
function delayWhen<T>(
  delayDurationSelector: (value: T, index: number) => Observable<never>,
  subscriptionDelay?: Observable<any>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/delayWhen.ts#L11-L11)

### Parameters

| Name                  | Type                                             | Description |
| --------------------- | ------------------------------------------------ | ----------- |
| delayDurationSelector | `(value: T, index: number) => Observable<never>` |             |
| subscriptionDelay     | `Observable<any>`                                |             |

```ts
function delayWhen<T>(
  delayDurationSelector: (value: T, index: number) => Observable<any>,
  subscriptionDelay?: Observable<any>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/delayWhen.ts#L12-L12)

### Parameters

| Name                  | Type                                           | Description |
| --------------------- | ---------------------------------------------- | ----------- |
| delayDurationSelector | `(value: T, index: number) => Observable<any>` |             |
| subscriptionDelay     | `Observable<any>`                              |             |
