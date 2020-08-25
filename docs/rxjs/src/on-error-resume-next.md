---
kind: FunctionDeclaration
name: onErrorResumeNext
module: src
---

# onErrorResumeNext

## description

When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
that was passed.

<span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>

![](onErrorResumeNext.png)

`onErrorResumeNext` Will subscribe to each observable source it is provided, in order.
If the source it's subscribed to emits an error or completes, it will move to the next source
without error.

If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.

`onErrorResumeNext` is basically {@link concat}, only it will continue, even if one of its
sources emits an error.

Note that there is no way to handle any errors thrown by sources via the result of
`onErrorResumeNext`. If you want to handle errors thrown in any given source, you can
always use the {@link catchError} operator on them before passing them into `onErrorResumeNext`.

## Example

Subscribe to the next Observable after map fails</caption>

```ts
import { onErrorResumeNext, of } from "rxjs";
import { map } from "rxjs/operators";

onErrorResumeNext(
  of(1, 2, 3, 0).pipe(
    map((x) => {
      if (x === 0) throw Error();
      return 10 / x;
    })
  ),
  of(1, 2, 3)
).subscribe(
  (val) => console.log(val),
  (err) => console.log(err), // Will never be called.
  () => console.log("done")
);

// Logs:
// 10
// 5
// 3.3333333333333335
// 1
// 2
// 3
// "done"
```

```ts
function onErrorResumeNext<T, R>(
  ...sources: Array<
    | ObservableInput<any>
    | Array<ObservableInput<any>>
    | ((...values: Array<any>) => R)
  >
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L77-L102)

## see

{@link concat}
{@link catchError}

## Parameters

| Name                 | Type    | Description                                                                                   |
| -------------------- | ------- | --------------------------------------------------------------------------------------------- |
| {...ObservableInput} | ``      | sources Observables (or anything that _is_ observable) passed either directly or as an array. |
| sources              | `any[]` |                                                                                               |

## return

{Observable} An Observable that concatenates all sources, one after the other,
ignoring all errors, such that any error causes it to move on to the next source.

## Overloads

```ts
function onErrorResumeNext<R>(v: ObservableInput<R>): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L8-L8)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v    | `any` |             |

```ts
function onErrorResumeNext<T2, T3, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L9-L9)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |

```ts
function onErrorResumeNext<T2, T3, T4, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L10-L10)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |

```ts
function onErrorResumeNext<T2, T3, T4, T5, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L11-L11)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |

```ts
function onErrorResumeNext<T2, T3, T4, T5, T6, R>(
  v2: ObservableInput<T2>,
  v3: ObservableInput<T3>,
  v4: ObservableInput<T4>,
  v5: ObservableInput<T5>,
  v6: ObservableInput<T6>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L12-L12)

### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v2   | `any` |             |
| v3   | `any` |             |
| v4   | `any` |             |
| v5   | `any` |             |
| v6   | `any` |             |

```ts
function onErrorResumeNext<R>(
  ...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>
): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L14-L14)

### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| observables | `any[]` |             |

```ts
function onErrorResumeNext<R>(array: ObservableInput<any>[]): Observable<R>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/onErrorResumeNext.ts#L15-L15)

### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| array | `any[]` |             |
