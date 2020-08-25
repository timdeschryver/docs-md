---
kind: InterfaceDeclaration
name: NextNotification
module: src
---

# NextNotification

## description

A notification representing a "next" from an observable.
Can be used with {@link dematerialize}.

```ts
interface NextNotification<T> {
  kind: "N";
  value: T;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L89-L94)
