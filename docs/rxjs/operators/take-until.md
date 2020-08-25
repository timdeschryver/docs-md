---
kind: FunctionDeclaration
name: takeUntil
module: operators
---

# takeUntil

## description

Emits the values emitted by the source Observable until a `notifier`
Observable emits a value.

<span class="informal">Lets values pass until a second Observable,
`notifier`, emits a value. Then, it completes.</span>

![](takeUntil.png)

`takeUntil` subscribes and begins mirroring the source Observable. It also
monitors a second Observable, `notifier` that you provide. If the `notifier`
emits a value, the output Observable stops mirroring the source Observable
and completes. If the `notifier` doesn't emit any value and completes
then `takeUntil` will pass all values.

## Example

Tick every second until the first click happens

```ts
import { fromEvent, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";

const source = interval(1000);
const clicks = fromEvent(document, "click");
const result = source.pipe(takeUntil(clicks));
result.subscribe((x) => console.log(x));
```

```ts
function takeUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/takeUntil.ts#L49-L51)

## see

{@link take}
{@link takeLast}
{@link takeWhile}
{@link skip}

## Parameters

| Name         | Type              | Description                                            |
| ------------ | ----------------- | ------------------------------------------------------ |
| {Observable} | ``                | notifier The Observable whose first emitted value will |
| notifier     | `Observable<any>` |                                                        |

## return

{Observable<T>} An Observable that emits the values from the source
Observable until such time as `notifier` emits its first value.

## name

takeUntil
