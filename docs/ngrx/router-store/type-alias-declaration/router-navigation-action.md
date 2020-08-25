---
kind: TypeAliasDeclaration
name: RouterNavigationAction
module: router-store
---

# RouterNavigationAction

## description

An action dispatched when the router navigates.

```ts
export type RouterNavigationAction<
  T extends BaseRouterStoreState = SerializedRouterStateSnapshot
> = {
  type: typeof ROUTER_NAVIGATION;
  payload: RouterNavigationPayload<T>;
};
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/actions.ts#L60-L65)
