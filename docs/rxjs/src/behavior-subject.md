---
kind: ClassDeclaration
name: BehaviorSubject
module: src
---

# BehaviorSubject

## description

A variant of Subject that requires an initial value and emits its current
value whenever it is subscribed to.

```ts
class BehaviorSubject<T> extends Subject<T> {
  _subscribe(subscriber: Subscriber<T>): Subscription;
  getValue(): T;
  next(value: T): void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/BehaviorSubject.ts#L13-L45)

## class

BehaviorSubject<T>

## Methods

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<T>): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/BehaviorSubject.ts#L24-L30)

#### Parameters (#\_subscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |

### getValue

```ts
getValue(): T;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/BehaviorSubject.ts#L32-L40)

### next

```ts
next(value: T): void;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/BehaviorSubject.ts#L42-L44)

#### Parameters (#next-parameters)

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | `T`  |             |
