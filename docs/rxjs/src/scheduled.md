---
kind: FunctionDeclaration
name: scheduled
module: src
---

# scheduled

## description

Converts from a common {@link ObservableInput} type to an observable where subscription and emissions
are scheduled on the provided scheduler.

```ts
function scheduled<T>(
  input: ObservableInput<T>,
  scheduler: SchedulerLike
): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/scheduled/scheduled.ts#L24-L39)

## see

{@link from}
{@link of}

## Parameters

| Name      | Type            | Description                                                              |
| --------- | --------------- | ------------------------------------------------------------------------ |
| input     | `any`           | The observable, array, promise, iterable, etc you would like to schedule |
| scheduler | `SchedulerLike` | The scheduler to use to schedule the subscription and emissions from     |
