---
kind: InterfaceDeclaration
name: Timestamp
module: src
---

# Timestamp

## description

A value and the time at which it was emitted.

Emitted by the `timestamp` operator

{@see timestamp}

```ts
interface Timestamp<T> {
  value: T;
  timestamp: number;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L21-L28)
