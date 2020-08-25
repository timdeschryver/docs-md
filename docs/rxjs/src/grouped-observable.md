---
kind: ClassDeclaration
name: GroupedObservable
module: src
---

# GroupedObservable

## description

An Observable representing values belonging to the same group represented by
a common key. The values emitted by a GroupedObservable come from the source
Observable. The common key is available as the field `key` on a
GroupedObservable instance.

```ts
class GroupedObservable<K, T> extends Observable<T> {
  _subscribe(subscriber: Subscriber<T>);
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L281-L299)

## class

GroupedObservable<K, T>

## Methods

### \_subscribe

```ts
_subscribe(subscriber: Subscriber<T>);
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/groupBy.ts#L290-L298)

#### Parameters (#\_subscribe-parameters)

| Name       | Type            | Description |
| ---------- | --------------- | ----------- |
| subscriber | `Subscriber<T>` |             |
