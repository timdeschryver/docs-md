---
kind: InterfaceDeclaration
name: TimeoutError
module: src
---

# TimeoutError

## description

An error emitted when a timeout occurs.

```ts
interface TimeoutError<T = unknown, M = unknown> {
  info: TimeoutInfo<T, M> | null;

  // inherited from Error
  name: string;
  message: string;
  stack?: string;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/timeout.ts#L56-L65)
