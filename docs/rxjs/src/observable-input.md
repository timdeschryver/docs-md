---
kind: TypeAliasDeclaration
name: ObservableInput
module: src
---

# ObservableInput

```ts
export type ObservableInput<T> =
  | SubscribableOrPromise<T>
  | ArrayLike<T>
  | Iterable<T>
  | AsyncIterableIterator<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L76-L76)
