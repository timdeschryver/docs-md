---
kind: TypeAliasDeclaration
name: ObservedValueTupleFromArray
module: src
---

# ObservedValueTupleFromArray

## description

Extracts a tuple of element types from an `ObservableInput<any>[]`.
If you have `O extends ObservableInput<any>[]` and you pass in
`[Observable<string>, Observable<number>]` you would get back a type
of `[string, number]`.

```ts
export type ObservedValueTupleFromArray<X> = X extends Array<
  ObservableInput<any>
>
  ? { [K in keyof X]: ObservedValueOf<X[K]> }
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L203-L206)
