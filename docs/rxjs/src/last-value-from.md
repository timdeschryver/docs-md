---
kind: FunctionDeclaration
name: lastValueFrom
module: src
---

# lastValueFrom

## description

Converts an observable to a promise by subscribing to the observable,
waiting for it to complete, and resolving the returned promise with the
last value from the observed stream.

If the observable stream completes before any values were emitted, the
returned promise will reject with {@link EmptyError}.

If the observable stream emits an error, the returned promise will reject
with that error.

**WARNING**: Only use this with observables you _know_ will complete. If the source
observable does not complete, you will end up with a promise that is hung up, and
potentially all of the state of an async function hanging out in memory. To avoid
this situation, look into adding something like {@link timeout}, {@link take},
{@link takeWhile}, or {@link takeUntil} amongst others.

### Example

Wait for the last value from a stream and emit it from a promise in
an async function.

```ts
import { interval, lastValueFrom } from "rxjs";
import { take } from "rxjs/operators";

async function execute() {
  const source$ = interval(2000).pipe(take(10));
  const finalNumber = await lastValueFrom(source$);
  console.log(`The final number is ${finalNumber}`);
}

execute();

// Expected output:
// "The final number is 9"
```

```ts
function lastValueFrom<T>(source: Observable<T>);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/lastValueFrom.ts#L44-L63)

## Parameters

| Name   | Type            | Description                            |
| ------ | --------------- | -------------------------------------- |
| source | `Observable<T>` | the observable to convert to a promise |
