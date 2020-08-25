---
kind: FunctionDeclaration
name: onErrorResumeNext
module: operators
---

# onErrorResumeNext

## description

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
that was passed.

<span class="informal">Execute series of Observables, subscribes to next one on error or complete.</span>

![](onErrorResumeNext.png)

`onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
as the source.

`onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
Observable in provided series, no matter if previous Observable completed or ended with an error. This will
be happening until there is no more Observables left in the series, at which point returned Observable will
complete - even if the last subscribed stream ended with an error.

`onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
an error.

Note that you do not get any access to errors emitted by the Observables. In particular do not
expect these errors to appear in error callback passed to {@link Observable#subscribe}. If you want to take
specific actions based on what error was emitted by an Observable, you should try out {@link catchError} instead.

## Example

Subscribe to the next Observable after map fails

```ts
import { of } from "rxjs";
import { onErrorResumeNext, map } from "rxjs/operators";

of(1, 2, 3, 0)
  .pipe(
    map((x) => {
      if (x === 0) {
        throw Error();
      }
      return 10 / x;
    }),
    onErrorResumeNext(of(1, 2, 3))
  )
  .subscribe(
    (val) => console.log(val),
    (err) => console.log(err), // Will never be called.
    () => console.log("that's it!")
  );

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "that's it!"
```

```ts
function onErrorResumeNext<T, R>(
  ...nextSources: Array<ObservableInput<any> | Array<ObservableInput<any>>>
): OperatorFunction<T, R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L90-L97)

## see

{@link concat}
{@link catchError}

## Parameters

| Name                 | Type    | Description                                                    |
| -------------------- | ------- | -------------------------------------------------------------- |
| {...ObservableInput} | ``      | observables Observables passed either directly or as an array. |
| nextSources          | `any[]` |                                                                |

## return

{Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
to the next passed Observable and so on, until it completes or runs out of Observables.

## name

onErrorResumeNext

## Overloads

```ts
function onErrorResumeNext<T>(): OperatorFunction<T, T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L11-L11)

```ts
function onErrorResumeNext<T, T2>(
  v: ObservableInput<T2>
): OperatorFunction<T, T | T2>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L12-L12)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |

```ts
function onErrorResumeNext<T, T2, T3>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>
): OperatorFunction<T, T | T2 | T3>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L13-L13)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |
| v2   | `any` |             |

```ts
function onErrorResumeNext<T, T2, T3, T4>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>
): OperatorFunction<T, T | T2 | T3 | T4>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L14-L14)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |

```ts
function onErrorResumeNext<T, T2, T3, T4, T5>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>
): OperatorFunction<T, T | T2 | T3 | T4 | T5>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L15-L15)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |

```ts
function onErrorResumeNext<T, T2, T3, T4, T5, T6>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>,
  v5: ObservableInput<T6>
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L16-L16)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |

```ts
function onErrorResumeNext<T, T2, T3, T4, T5, T6, T7>(
  v: ObservableInput<T2>,
  v2: ObservableInput<T3>,
  v3: ObservableInput<T4>,
  v4: ObservableInput<T5>,
  v5: ObservableInput<T6>,
  v6: ObservableInput<T7>
): OperatorFunction<T, T | T2 | T3 | T4 | T5 | T6 | T7>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L17-L17)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |
| v6   | `any` |             |

```ts
function onErrorResumeNext<T, R>(
  ...observables: Array<ObservableInput<any>>
): OperatorFunction<T, T | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L18-L18)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function onErrorResumeNext<T, R>(
  array: ObservableInput<any>[]
): OperatorFunction<T, T | R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/onErrorResumeNext.ts#L19-L19)

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| array | `any[]` |             |
