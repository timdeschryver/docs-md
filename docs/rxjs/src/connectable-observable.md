---
kind: ClassDeclaration
name: ConnectableObservable
module: src
---

# ConnectableObservable

```ts
class ConnectableObservable<T> extends Observable<T> {
  _isComplete = false;

  _subscribe(subscriber: Subscriber<T>);
  connect(): Subscription;
  refCount(): Observable<T>;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/ConnectableObservable.ts#L12-L56)

## class

ConnectableObservable<T>

## Methods

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<T>);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/ConnectableObservable.ts#L26-L28)

#### Parameters (#\_subscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |

### connect

```ts
connect(): Subscription;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/ConnectableObservable.ts#L38-L51)

### refCount

```ts
refCount(): Observable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/ConnectableObservable.ts#L53-L55)

## Parameters

| Name         | Type      | Description       |
| ------------ | --------- | ----------------- |
| \_isComplete | `boolean` | /\*_ @internal _/ |
