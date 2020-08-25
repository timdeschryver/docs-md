---
kind: InterfaceDeclaration
name: On
module: store
---

# On

```ts
interface On<S> {
  reducer: ActionReducer<S>;
  types: string[];
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/src/reducer_creator.ts#L4-L7)

## Properties

| Name    | Type                       | Description |
| ------- | -------------------------- | ----------- |
| reducer | `ActionReducer<S, Action>` |             |
| types   | `string[]`                 |             |
