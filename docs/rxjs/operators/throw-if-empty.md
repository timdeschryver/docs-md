---
kind: FunctionDeclaration
name: throwIfEmpty
module: operators
---

# throwIfEmpty

## description

If the source observable completes without emitting a value, it will emit
an error. The error will be created at that time by the optional
`errorFactory` argument, otherwise, the error will be {@link EmptyError}.

![](throwIfEmpty.png)

## Example

```ts
import { fromEvent, timer } from "rxjs";
import { throwIfEmpty, takeUntil } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$
  .pipe(
    takeUntil(timer(1000)),
    throwIfEmpty(
      () => new Error("the document was not clicked within 1 second")
    )
  )
  .subscribe({
    next() {
      console.log("The button was clicked");
    },
    error(err) {
      console.error(err);
    },
  });
```

```ts
function throwIfEmpty<T>(
  errorFactory: () => any = defaultErrorFactory
): MonoTypeOperatorFunction<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/throwIfEmpty.ts#L38-L42)

## Parameters

| Name         | Type        | Description                              |
| ------------ | ----------- | ---------------------------------------- |
| errorFactory | `() => any` | A factory function called to produce the |
