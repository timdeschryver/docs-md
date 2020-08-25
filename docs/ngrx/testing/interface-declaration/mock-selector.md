---
kind: InterfaceDeclaration
name: MockSelector
module: testing
---

# MockSelector

```ts
interface MockSelector {
  selector:
    | string
    | MemoizedSelector<any, any>
    | MemoizedSelectorWithProps<any, any, any>;
  value: any;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/testing/src/mock_selector.ts#L3-L9)

## Properties

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| selector | `any` |             |
| value    | `any` |             |
