---
kind: FunctionDeclaration
name: repeatWhen
module: operators
---

# repeatWhen

## description

Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
this method will resubscribe to the source Observable.

![](repeatWhen.png)

## Example

Repeat a message stream on click

```ts
import { of, fromEvent } from "rxjs";
import { repeatWhen } from "rxjs/operators";

const source = of("Repeat message");
const documentClick$ = fromEvent(document, "click");

source
  .pipe(repeatWhen(() => documentClick$))
  .subscribe((data) => console.log(data));
```

```ts
function repeatWhen<T>(
  notifier: (notifications: Observable<void>) => Observable<any>
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/repeatWhen.ts#L40-L133)

## see

{@link repeat}
{@link retry}
{@link retryWhen}

## Parameters

| Name                     | Type                                                   | Description                                                                      |
| ------------------------ | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| {function(notifications: | ``                                                     | Observable): Observable} notifier - Receives an Observable of notifications with |
| notifier                 | `(notifications: Observable<void>) => Observable<any>` |                                                                                  |

## return

{Observable} The source Observable modified with repeat logic.

## name

repeatWhen
