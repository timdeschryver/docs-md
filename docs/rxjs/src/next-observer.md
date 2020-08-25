---
kind: InterfaceDeclaration
name: NextObserver
module: src
---

# NextObserver

```ts
interface NextObserver<T> {
  closed?: boolean;
  next: (value: T) => void;
  error?: (err: any) => void;
  complete?: () => void;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L121-L126)
