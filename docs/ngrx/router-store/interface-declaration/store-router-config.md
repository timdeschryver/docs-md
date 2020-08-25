---
kind: InterfaceDeclaration
name: StoreRouterConfig
module: router-store
---

# StoreRouterConfig

```ts
interface StoreRouterConfig<
  T extends BaseRouterStoreState = SerializedRouterStateSnapshot
> {
  stateKey?: StateKeyOrSelector<T>;
  serializer?: new (...args: any[]) => RouterStateSerializer;
  navigationActionTiming?: NavigationActionTiming;
  routerState?: RouterState;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/router_store_module.ts#L52-L71)

## Properties

| Name                   | Type                                            | Description                                                                  |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------- |
| stateKey               | `any`                                           |                                                                              |
| serializer             | `new (...args: any[]) => RouterStateSerializer` |                                                                              |
| navigationActionTiming | `NavigationActionTiming`                        | By default, ROUTER_NAVIGATION is dispatched before guards and resolvers run. |

Therefore, the action could run too soon, for example
there may be a navigation cancel due to a guard saying the navigation is not allowed.
To run ROUTER_NAVIGATION after guards and resolvers,
set this property to NavigationActionTiming.PostActivation. |
| routerState | `RouterState` | Decides which router serializer should be used, if there is none provided, and the metadata on the dispatched @ngrx/router-store action payload.
Set to `Full` to use the `DefaultRouterStateSerializer` and to set the angular router events as payload.
Set to `Minimal` to use the `MinimalRouterStateSerializer` and to set a minimal router event with the navigation id and url as payload. |
