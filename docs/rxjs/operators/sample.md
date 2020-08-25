---
kind: FunctionDeclaration
name: sample
module: operators
---

# sample

## description

Emits the most recently emitted value from the source Observable whenever
another Observable, the `notifier`, emits.

<span class="informal">It's like {@link sampleTime}, but samples whenever
the `notifier` Observable emits something.</span>

![](sample.png)

Whenever the `notifier` Observable emits a value or completes, `sample`
looks at the source Observable and emits whichever value it has most recently
emitted since the previous sampling, unless the source has not emitted
anything since the previous sampling. The `notifier` is subscribed to as soon
as the output Observable is subscribed.

## Example

On every click, sample the most recent "seconds" timer

```ts
import { fromEvent, interval } from "rxjs";
import { sample } from "rxjs/operators";

const seconds = interval(1000);
const clicks = fromEvent(document, "click");
const result = seconds.pipe(sample(clicks));
result.subscribe((x) => console.log(x));
```

```ts
function sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/sample.ts#L48-L50)

## see

{@link audit}
{@link debounce}
{@link sampleTime}
{@link throttle}

## Parameters

| Name              | Type              | Description                                     |
| ----------------- | ----------------- | ----------------------------------------------- |
| {Observable<any>} | ``                | notifier The Observable to use for sampling the |
| notifier          | `Observable<any>` |                                                 |

## return

{Observable<T>} An Observable that emits the results of sampling the
values emitted by the source Observable whenever the notifier Observable
emits value or completes.

## name

sample
