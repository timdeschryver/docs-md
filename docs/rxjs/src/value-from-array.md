---
kind: TypeAliasDeclaration
name: ValueFromArray
module: src
---

# ValueFromArray

## description

Extracts the generic value from an Array type.
If you have `T extends Array<any>`, and pass a `string[]` to it,
`ValueFromArray<T>` will return the actual type of `string`.

```ts
export type ValueFromArray<A> = A extends Array<infer T> ? T : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L240-L240)
