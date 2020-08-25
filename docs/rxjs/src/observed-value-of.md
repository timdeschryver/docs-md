---
kind: TypeAliasDeclaration
name: ObservedValueOf
module: src
---

# ObservedValueOf

## description

Extracts the type from an `ObservableInput<any>`. If you have
`O extends ObservableInput<any>` and you pass in `Observable<number>`, or
`Promise<number>`, etc, it will type as `number`.

```ts
export type ObservedValueOf<O> = O extends ObservableInput<infer T> ? T : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L179-L179)
