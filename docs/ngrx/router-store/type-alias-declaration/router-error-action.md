---
kind: TypeAliasDeclaration
name: RouterErrorAction
module: router-store
---

# RouterErrorAction

## description

An action dispatched when the router errors.

```ts
export type RouterErrorAction<
  T,
  V extends BaseRouterStoreState = SerializedRouterStateSnapshot
> = {
  type: typeof ROUTER_ERROR;
  payload: RouterErrorPayload<T, V>;
};
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/actions.ts#L125-L131)
