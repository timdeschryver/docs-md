---
kind: TypeAliasDeclaration
name: Head
module: src
---

# Head

## description

Extracts the head of a tuple.
If you declare `Head<[A, B, C]>` you will get back `A`.

```ts
export type Head<X extends any[]> = ((...args: X) => any) extends (
  arg: infer U,
  ...rest: any[]
) => any
  ? U
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L221-L224)
