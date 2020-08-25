---
kind: InterfaceDeclaration
name: TimeInterval
module: src
---

# TimeInterval

## description

A value emitted and the amount of time since the last value was emitted.

Emitted by the `timeInterval` operator.

{@see timeInterval}

```ts
interface TimeInterval<T> {
  value: T;
  interval: number;
}
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L37-L46)
