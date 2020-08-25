---
kind: ClassDeclaration
name: ReplaySubject
module: src
---

# ReplaySubject

## description

A variant of {@link Subject} that "replays" old values to new subscribers by emitting them when they first subscribe.

`ReplaySubject` has an internal buffer that will store a specified number of values that it has observed. Like `Subject`,
`ReplaySubject` "observes" values by having them passed to its `next` method. When it observes a value, it will store that
value for a time determined by the configuration of the `ReplaySubject`, as passed to its constructor.

When a new subscriber subscribes to the `ReplaySubject` instance, it will synchronously emit all values in its buffer in
a First-In-First-Out (FIFO) manner. The `ReplaySubject` will also complete, if it has observed completion; and it will
error if it has observed an error.

There are two main configuration items to be concerned with:

1. `bufferSize` - This will determine how many items are stored in the buffer, defaults to infinite.
2. `windowTime` - The amount of time to hold a value in the buffer before removing it from the buffer.

Both configurations may exist simultaneously. So if you would like to buffer a maximum of 3 values, as long as the values
are less than 2 seconds old, you could do so with a `new ReplaySubject(3, 2000)`.

### Differences with BehaviorSubject

`BehaviorSubject` is similar to `new ReplaySubject(1)`, with a couple fo exceptions:

1. `BehaviorSubject` comes "primed" with a single value upon construction.
2. `ReplaySubject` will replay values, even after observing an error, where `BehaviorSubject` will not.

{@see Subject}
{@see BehaviorSubject}
{@see shareReplay}

```ts
class ReplaySubject<T> extends Subject<T> {
  _subscribe(subscriber: Subscriber<T>): Subscription;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/ReplaySubject.ts#L39-L157)

## Methods

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<T>): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/ReplaySubject.ts#L87-L120)

#### Parameters (#\_subscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |
