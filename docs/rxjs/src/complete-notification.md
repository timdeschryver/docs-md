---
kind: InterfaceDeclaration
name: CompleteNotification
module: src
---

# CompleteNotification

## description

A notification representing a "completion" from an observable.
Can be used with {@link dematerialize}.

```ts
interface CompleteNotification {
  kind: "C";
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L110-L112)
