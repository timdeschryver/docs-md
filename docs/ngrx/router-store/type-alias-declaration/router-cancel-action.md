---
kind: TypeAliasDeclaration
name: RouterCancelAction
module: router-store
---

# RouterCancelAction

## description

An action dispatched when the router cancels navigation.

```ts
export type RouterCancelAction<
  T,
  V extends BaseRouterStoreState = SerializedRouterStateSnapshot
> = {
  type: typeof ROUTER_CANCEL;
  payload: RouterCancelPayload<T, V>;
};
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/actions.ts#L92-L98)
