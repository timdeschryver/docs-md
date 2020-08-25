---
kind: ClassDeclaration
name: Scheduler
module: src
---

# Scheduler

## description

An execution context and a data structure to order tasks and schedule their
execution. Provides a notion of (potentially virtual) time, through the
`now()` getter method.

Each unit of work in a Scheduler is called an `Action`.

```ts
class Scheduler {
  now(): number;
  schedule(work, delay?, state?): Subscription;
}
```

```ts
class Scheduler implements SchedulerLike {
  public static now: () => number = dateTimestampProvider.now;
  public now: () => number;

  public schedule<T>(
    work: (this: SchedulerAction<T>, state?: T) => void,
    delay: number = 0,
    state?: T
  ): Subscription;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Scheduler.ts#L25-L64)

## class

Scheduler

## deprecated

Scheduler is an internal implementation detail of RxJS, and
should not be used directly. Rather, create your own class and implement
{@link SchedulerLike}

## Methods

### schedule

#### description (#schedule-description)

Schedules a function, `work`, for execution. May happen at some point in
the future, according to the `delay` parameter, if specified. May be passed
some context object, `state`, which will be passed to the `work` function.

The given arguments will be processed an stored as an Action object in a
queue of actions.

```ts
public schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay: number = 0, state?: T): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/Scheduler.ts#L61-L63)

#### Parameters (#schedule-parameters)

| Name             | Type                                            | Description                                                     |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| {function(state: | ``                                              | ?T): ?Subscription} work A function representing a              |
| {number}         | ``                                              | [delay] Time to wait before executing the work, where the       |
| {T}              | ``                                              | [state] Some contextual data that the `work` function uses when |
| work             | `(this: SchedulerAction<T>, state?: T) => void` |                                                                 |
| delay            | `number`                                        |                                                                 |
| state            | `T`                                             |                                                                 |

#### return (#schedule-return)

{Subscription} A subscription in order to be able to unsubscribe
the scheduled work.

## Parameters

| Name | Type           | Description |
| ---- | -------------- | ----------- |
| now  | `() => number` |             |
| now  | `() => number` | /\*\*       |

- A getter method that returns a number representing the current time
- (at the time this function was called) according to the scheduler's own
- internal clock.
- @return {number} A number that represents the current time. May or may not
- have a relation to wall-clock time. May or may not refer to a time unit
- (e.g. milliseconds).
  \*/ |
