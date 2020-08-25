---
kind: FunctionDeclaration
name: tap
module: operators
---

# tap

## description

Perform a side effect for every emission on the source Observable, but return
an Observable that is identical to the source.

<span class="informal">Intercepts each emission on the source and runs a
function, but returns an output which is identical to the source as long as errors don't occur.</span>

![](tap.png)

Returns a mirrored Observable of the source Observable, but modified so that
the provided Observer is called to perform a side effect for every value,
error, and completion emitted by the source. Any errors that are thrown in
the aforementioned Observer or handlers are safely sent down the error path
of the output Observable.

This operator is useful for debugging your Observables for the correct values
or performing other side effects.

Note: this is different to a `subscribe` on the Observable. If the Observable
returned by `tap` is not subscribed, the side effects specified by the
Observer will never happen. `tap` therefore simply spies on existing
execution, it does not trigger an execution to happen like `subscribe` does.

## Example

Map every click to the clientX position of that click, while also logging the click event

```ts
import { fromEvent } from "rxjs";
import { tap, map } from "rxjs/operators";

const clicks = fromEvent(document, "click");
const positions = clicks.pipe(
  tap((ev) => console.log(ev)),
  map((ev) => ev.clientX)
);
positions.subscribe((x) => console.log(x));
```

```ts
function tap<T>(
  nextOrObserver?: PartialObserver<T> | ((x: T) => void) | null,
  error?: ((e: any) => void) | null,
  complete?: (() => void) | null
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L68-L74)

## see

{@link map}
{@link Observable#subscribe}

## Parameters

| Name           | Type                                                                              | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| {Observer      | function}                                                                         | ``                                                                                | [nextOrObserver] A normal Observer object or a |
| {function}     | ``                                                                                | [error] Callback for errors in the source.                                        |
| {function}     | ``                                                                                | [complete] Callback for the completion of the source.                             |
| nextOrObserver | `import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").NextObserver<T> | import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").ErrorObserver<T> | import("C:/Users/tdeschryver/dev/forks/rxjs/src/internal/types").CompletionObserver<T> | ((x: T) => void)` |  |
| error          | `(e: any) => void`                                                                |                                                                                   |
| complete       | `() => void`                                                                      |                                                                                   |

## return

{Observable} An Observable identical to the source, but runs the
specified Observer or callback(s) for each item.

## name

tap

## Overloads

```ts
function tap<T>(
  next: null | undefined,
  error: null | undefined,
  complete: () => void
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L11-L11)

### Parameters

| Name     | Type         | Description |
| -------- | ------------ | ----------- |
| next     | `null`       |             |
| error    | `null`       |             |
| complete | `() => void` |             |

```ts
function tap<T>(
  next: null | undefined,
  error: (error: any) => void,
  complete?: () => void
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L13-L13)

### Parameters

| Name     | Type                   | Description |
| -------- | ---------------------- | ----------- |
| next     | `null`                 |             |
| error    | `(error: any) => void` |             |
| complete | `() => void`           |             |

```ts
function tap<T>(
  next: (value: T) => void,
  error: null | undefined,
  complete: () => void
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L15-L15)

### Parameters

| Name     | Type                 | Description |
| -------- | -------------------- | ----------- |
| next     | `(value: T) => void` |             |
| error    | `null`               |             |
| complete | `() => void`         |             |

```ts
function tap<T>(
  next?: (x: T) => void,
  error?: (e: any) => void,
  complete?: () => void
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L16-L16)

### Parameters

| Name     | Type               | Description |
| -------- | ------------------ | ----------- |
| next     | `(x: T) => void`   |             |
| error    | `(e: any) => void` |             |
| complete | `() => void`       |             |

```ts
function tap<T>(observer: PartialObserver<T>): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/tap.ts#L17-L17)

### Parameters

| Name     | Type                 | Description |
| -------- | -------------------- | ----------- |
| observer | `PartialObserver<T>` |             |
