---
kind: InterfaceDeclaration
name: CompletionObserver
module: src
---

# CompletionObserver

```ts
interface CompletionObserver<T> {
  closed?: boolean;
  next?: (value: T) => void;
  error?: (err: any) => void;
  complete: () => void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L135-L140)
