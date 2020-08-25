---
kind: FunctionDeclaration
name: defaultIfEmpty
module: operators
---

# defaultIfEmpty

## description

Emits a given value if the source Observable completes without emitting any
`next` value, otherwise mirrors the source Observable.

<span class="informal">If the source Observable turns out to be empty, then
this operator will emit a default value.</span>

![](defaultIfEmpty.png)

`defaultIfEmpty` emits the values emitted by the source Observable or a
specified default value if the source Observable is empty (completes without
having emitted any `next` value).

## Example

If no clicks happen in 5 seconds, then emit "no clicks"

```ts
import { fromEvent } from "rxjs";
import { defaultIfEmpty, takeUntil } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
const result = clicksBeforeFive.pipe(defaultIfEmpty("no clicks"));
result.subscribe((x) => console.log(x));
```

```ts
function defaultIfEmpty<T, R>(
  defaultValue: R | null = null
): OperatorFunction<T, T | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/defaultIfEmpty.ts#L46-L48)

## see

{@link empty}
{@link last}

## Parameters

| Name         | Type | Description                                              |
| ------------ | ---- | -------------------------------------------------------- |
| {any}        | ``   | [defaultValue=null] The default value used if the source |
| defaultValue | `R`  |                                                          |

## return

{Observable} An Observable that emits either the specified
`defaultValue` if the source Observable emits no items, or the values emitted
by the source Observable.

## name

defaultIfEmpty

## Overloads

```ts
function defaultIfEmpty<T, R = T>(defaultValue?: R): OperatorFunction<T, T | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/defaultIfEmpty.ts#L8-L8)

### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| defaultValue | `R`  |             |
