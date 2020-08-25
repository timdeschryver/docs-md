---
kind: TypeAliasDeclaration
name: PartialObserver
module: src
---

# PartialObserver

```ts
export type PartialObserver<T> =
  | NextObserver<T>
  | ErrorObserver<T>
  | CompletionObserver<T>;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L142-L142)
