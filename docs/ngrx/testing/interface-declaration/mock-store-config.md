---
kind: InterfaceDeclaration
name: MockStoreConfig
module: testing
---

# MockStoreConfig

```ts
interface MockStoreConfig<T> {
  initialState?: T;
  selectors?: MockSelector[];
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/testing.ts#L16-L19)

## Properties

| Name         | Type             | Description |
| ------------ | ---------------- | ----------- |
| initialState | `T`              |             |
| selectors    | `MockSelector[]` |             |
