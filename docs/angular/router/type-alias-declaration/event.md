---
kind: TypeAliasDeclaration
name: Event
module: router
---

# Event

## description

Router events that allow you to track the lifecycle of the router.

The events occur in the following sequence:

- [NavigationStart](api/router/NavigationStart): Navigation starts.
- [RouteConfigLoadStart](api/router/RouteConfigLoadStart): Before
  the router [lazy loads](/guide/router#lazy-loading) a route configuration.
- [RouteConfigLoadEnd](api/router/RouteConfigLoadEnd): After a route has been lazy loaded.
- [RoutesRecognized](api/router/RoutesRecognized): When the router parses the URL
  and the routes are recognized.
- [GuardsCheckStart](api/router/GuardsCheckStart): When the router begins the _guards_
  phase of routing.
- [ChildActivationStart](api/router/ChildActivationStart): When the router
  begins activating a route's children.
- [ActivationStart](api/router/ActivationStart): When the router begins activating a route.
- [GuardsCheckEnd](api/router/GuardsCheckEnd): When the router finishes the _guards_
  phase of routing successfully.
- [ResolveStart](api/router/ResolveStart): When the router begins the _resolve_
  phase of routing.
- [ResolveEnd](api/router/ResolveEnd): When the router finishes the _resolve_
  phase of routing successfuly.
- [ChildActivationEnd](api/router/ChildActivationEnd): When the router finishes
  activating a route's children.
- [ActivationEnd](api/router/ActivationStart): When the router finishes activating a route.
- [NavigationEnd](api/router/NavigationEnd): When navigation ends successfully.
- [NavigationCancel](api/router/NavigationCancel): When navigation is canceled.
- [NavigationError](api/router/NavigationError): When navigation fails
  due to an unexpected error.
- [Scroll](api/router/Scroll): When the user scrolls.

```ts
export type Event =
  | RouterEvent
  | RouteConfigLoadStart
  | RouteConfigLoadEnd
  | ChildActivationStart
  | ChildActivationEnd
  | ActivationStart
  | ActivationEnd
  | Scroll;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/events.ts#L480-L481)

## publicApi
