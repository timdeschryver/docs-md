---
kind: TypeAliasDeclaration
name: RouterRequestAction
module: router-store
---

# RouterRequestAction

## description

An action dispatched when a router navigation request is fired.

```ts
export type RouterRequestAction<
  T extends BaseRouterStoreState = SerializedRouterStateSnapshot
> = {
  type: typeof ROUTER_REQUEST;
  payload: RouterRequestPayload<T>;
};
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/actions.ts#L31-L36)
