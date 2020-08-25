---
kind: FunctionDeclaration
name: exhaust
module: operators
---

# exhaust

## description

Converts a higher-order Observable into a first-order Observable by dropping
inner Observables while the previous inner Observable has not yet completed.

<span class="informal">Flattens an Observable-of-Observables by dropping the
next inner Observables while the current inner is still executing.</span>

![](exhaust.png)

`exhaust` subscribes to an Observable that emits Observables, also known as a
higher-order Observable. Each time it observes one of these emitted inner
Observables, the output Observable begins emitting the items emitted by that
inner Observable. So far, it behaves like {@link mergeAll}. However,
`exhaust` ignores every new inner Observable if the previous Observable has
not yet completed. Once that one completes, it will accept and flatten the
next inner Observable and repeat this process.

## Example

Run a finite timer for each click, only if there is no currently active timer

```ts
import { fromEvent, interval } from "rxjs";
import { exhaust, map, take } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const higherOrder = clicks.pipe(map((ev) => interval(1000).pipe(take(5))));
const result = higherOrder.pipe(exhaust());
result.subscribe((x) => console.log(x));
```

```ts
function exhaust<T>(): OperatorFunction<any, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaust.ts#L55-L57)

## see

{@link combineAll}
{@link concatAll}
{@link switchAll}
{@link switchMap}
{@link mergeAll}
{@link exhaustMap}
{@link zipAll}

## return

{Observable} An Observable that takes a source of Observables and propagates the first observable
exclusively until it completes before subscribing to the next.

## name

exhaust

## Overloads

```ts
function exhaust<T>(): OperatorFunction<ObservableInput<T>, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaust.ts#L9-L9)

```ts
function exhaust<R>(): OperatorFunction<any, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/exhaust.ts#L10-L10)
