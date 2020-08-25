---
kind: TypeAliasDeclaration
name: SubscribableOrPromise
module: src
---

# SubscribableOrPromise

```ts
export type SubscribableOrPromise<T> =
  | Subscribable<T>
  | Subscribable<never>
  | PromiseLike<T>
  | InteropObservable<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L61-L61)
