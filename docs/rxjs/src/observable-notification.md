---
kind: TypeAliasDeclaration
name: ObservableNotification
module: src
---

# ObservableNotification

## description

Valid observable notification types.

```ts
export type ObservableNotification<T> =
  | NextNotification<T>
  | ErrorNotification
  | CompleteNotification;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L117-L117)
