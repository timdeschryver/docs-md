---
kind: FunctionDeclaration
name: catchError
module: operators
---

# catchError

## description

Catches errors on the observable to be handled by returning a new observable or throwing an error.

<span class="informal">
It only listens to the error channel and ignores notifications.
Handles errors from the source observable, and maps them to a new observable.
The error may also be rethrown, or a new error can be thrown to emit an error from the result.
</span>

![](catch.png)

This operator handles errors, but forwards along all other events to the resulting observable.
If the source observable terminates with an error, it will map that error to a new observable,
subscribe to it, and forward all of its events to the resulting observable.

## Examples

Continues with a different Observable when there's an error

```ts
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(
    map((n) => {
      if (n === 4) {
        throw "four!";
      }
      return n;
    }),
    catchError((err) => of("I", "II", "III", "IV", "V"))
  )
  .subscribe((x) => console.log(x));
// 1, 2, 3, I, II, III, IV, V
```

Retries the caught source Observable again in case of error, similar to retry() operator

```ts
import { of } from "rxjs";
import { map, catchError, take } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(
    map((n) => {
      if (n === 4) {
        throw "four!";
      }
      return n;
    }),
    catchError((err, caught) => caught),
    take(30)
  )
  .subscribe((x) => console.log(x));
// 1, 2, 3, 1, 2, 3, ...
```

Throws a new error when the source Observable throws an error

```ts
import { of } from "rxjs";
import { map, catchError } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(
    map((n) => {
      if (n === 4) {
        throw "four!";
      }
      return n;
    }),
    catchError((err) => {
      throw "error in source. Details: " + err;
    })
  )
  .subscribe(
    (x) => console.log(x),
    (err) => console.log(err)
  );
// 1, 2, 3, error in source. Details: four!
```

```ts
function catchError<T, O extends ObservableInput<any>>(
  selector: (err: any, caught: Observable<T>) => O
): OperatorFunction<T, T | ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/catchError.ts#L108-L153)

## see

{@link onErrorResumeNext}
{@link repeat}
{@link repeatWhen}
{@link retry }
{@link retryWhen}

## Parameters

| Name       | Type                                     | Description                                                                                |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| {function} | ``                                       | selector a function that takes as arguments `err`, which is the error, and `caught`, which |
| selector   | `(err: any, caught: Observable<T>) => O` |                                                                                            |

## return

{Observable} An observable that originates from either the source or the observable returned by the
catch `selector` function.

## name

catchError

## Overloads

```ts
function catchError<T, O extends ObservableInput<any>>(
  selector: (err: any, caught: Observable<T>) => O
): OperatorFunction<T, T | ObservedValueOf<O>>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/catchError.ts#L11-L13)

### Parameters

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| selector | `(err: any, caught: Observable<T>) => O` |             |
