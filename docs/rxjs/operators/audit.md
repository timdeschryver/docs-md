---
kind: FunctionDeclaration
name: audit
module: operators
---

# audit

## description

Ignores source values for a duration determined by another Observable, then
emits the most recent value from the source Observable, then repeats this
process.

<span class="informal">It's like {@link auditTime}, but the silencing
duration is determined by a second Observable.</span>

![](audit.png)

`audit` is similar to `throttle`, but emits the last value from the silenced
time window, instead of the first value. `audit` emits the most recent value
from the source Observable on the output Observable as soon as its internal
timer becomes disabled, and ignores source values while the timer is enabled.
Initially, the timer is disabled. As soon as the first source value arrives,
the timer is enabled by calling the `durationSelector` function with the
source value, which returns the "duration" Observable. When the duration
Observable emits a value or completes, the timer is disabled, then the most
recent source value is emitted on the output Observable, and this process
repeats for the next source value.

## Example

Emit clicks at a rate of at most one click per second

```ts
import { fromEvent, interval } from "rxjs";
import { audit } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const result = clicks.pipe(audit((ev) => interval(1000)));
result.subscribe((x) => console.log(x));
```

```ts
function audit<T>(
  durationSelector: (value: T) => SubscribableOrPromise<any>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/audit.ts#L55-L59)

## see

{@link auditTime}
{@link debounce}
{@link delayWhen}
{@link sample}
{@link throttle}

## Parameters

| Name             | Type                                       | Description                                            |
| ---------------- | ------------------------------------------ | ------------------------------------------------------ |
| {function(value: | ``                                         | T): SubscribableOrPromise} durationSelector A function |
| durationSelector | `(value: T) => SubscribableOrPromise<any>` |                                                        |

## return

{Observable<T>} An Observable that performs rate-limiting of
emissions from the source Observable.

## name

audit
