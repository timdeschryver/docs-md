---
kind: InterfaceDeclaration
name: Observer
module: src
---

# Observer

```ts
interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L144-L149)
