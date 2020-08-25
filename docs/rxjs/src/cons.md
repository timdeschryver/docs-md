---
kind: TypeAliasDeclaration
name: Cons
module: src
---

# Cons

## description

Constructs a new tuple with the specified type at the head.
If you declare `Cons<A, [B, C]>` you will get back `[A, B, C]`.

```ts
export type Cons<X, Y extends any[]> = ((arg: X, ...rest: Y) => any) extends (
  ...args: infer U
) => any
  ? U
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L212-L215)
