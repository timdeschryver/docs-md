---
kind: TypeAliasDeclaration
name: ObservedValueUnionFromArray
module: src
---

# ObservedValueUnionFromArray

## description

Extracts a union of element types from an `ObservableInput<any>[]`.
If you have `O extends ObservableInput<any>[]` and you pass in
`Observable<string>[]` or `Promise<string>[]` you would get
back a type of `string`.
If you pass in `[Observable<string>, Observable<number>]` you would
get back a type of `string | number`.

```ts
export type ObservedValueUnionFromArray<X> = X extends Array<
  ObservableInput<infer T>
>
  ? T
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L189-L192)
