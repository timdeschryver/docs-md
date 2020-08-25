---
kind: TypeAliasDeclaration
name: InteropObservable
module: src
---

# InteropObservable

```ts
export type InteropObservable<T> = {
  [Symbol.observable]: () => Subscribable<T>;
};
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L81-L81)
