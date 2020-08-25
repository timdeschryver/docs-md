---
kind: TypeAliasDeclaration
name: RouterNavigatedAction
module: router-store
---

# RouterNavigatedAction

## description

An action dispatched after navigation has ended and new route is active.

```ts
export type RouterNavigatedAction<
  T extends BaseRouterStoreState = SerializedRouterStateSnapshot
> = {
  type: typeof ROUTER_NAVIGATED;
  payload: RouterNavigatedPayload<T>;
};
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/actions.ts#L156-L161)
