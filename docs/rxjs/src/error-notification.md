---
kind: InterfaceDeclaration
name: ErrorNotification
module: src
---

# ErrorNotification

## description

A notification representing an "error" from an observable.
Can be used with {@link dematerialize}.

```ts
interface ErrorNotification {
  kind: "E";
  error: any;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L100-L104)
