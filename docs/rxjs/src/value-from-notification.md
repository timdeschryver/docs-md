---
kind: TypeAliasDeclaration
name: ValueFromNotification
module: src
---

# ValueFromNotification

## description

Gets the value type from an {@link ObservableNotification}, if possible.

```ts
export type ValueFromNotification<T> = T extends { kind: "N" | "E" | "C" }
  ? T extends NextNotification<any>
    ? T extends { value: infer V }
      ? V
      : undefined
    : never
  : never;
```

[Link to repo](https://github.com/ReactiveX/rxjs/blob/master/src/internal/types.ts#L245-L249)
