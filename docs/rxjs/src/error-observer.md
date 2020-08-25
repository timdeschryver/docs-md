---
kind: InterfaceDeclaration
name: ErrorObserver
module: src
---

# ErrorObserver

```ts
interface ErrorObserver<T> {
  closed?: boolean;
  next?: (value: T) => void;
  error: (err: any) => void;
  complete?: () => void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L128-L133)
