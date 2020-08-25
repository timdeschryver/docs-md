---
kind: TypeAliasDeclaration
name: Tail
module: src
---

# Tail

## description

Extracts the tail of a tuple.
If you declare `Tail<[A, B, C]>` you will get back `[B, C]`.

```ts
export type Tail<X extends any[]> = ((...args: X) => any) extends (
  arg: any,
  ...rest: infer U
) => any
  ? U
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L230-L233)
