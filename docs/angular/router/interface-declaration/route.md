---
kind: InterfaceDeclaration
name: Route
module: router
---

# Route

## description

A configuration object that defines a single route.
A set of routes are collected in a `Routes` array to define a `Router` configuration.
The router attempts to match segments of a given URL against each route,
using the configuration options defined in this object.

Supports static, parameterized, redirect, and wildcard routes, as well as
custom route data and resolve methods.

For detailed usage information, see the [Routing Guide](guide/router).

```ts
interface Route {
  path?: string;
  pathMatch?: string;
  matcher?: UrlMatcher;
  component?: Type<any>;
  redirectTo?: string;
  outlet?: string;
  canActivate?: any[];
  canActivateChild?: any[];
  canDeactivate?: any[];
  canLoad?: any[];
  data?: Data;
  resolve?: ResolveData;
  children?: Routes;
  loadChildren?: LoadChildren;
  runGuardsAndResolvers?: RunGuardsAndResolvers;
  _loadedConfig?: LoadedRouterConfig;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L387-L488)

## usageNotes

### Simple Configuration

The following route specifies that when navigating to, for example,
`/team/11/user/bob`, the router creates the 'Team' component
with the 'User' child component in it.

```
[{
path: 'team/:id',
component: Team,
children: [{
path: 'user/:name',
component: User
}]
}]
```

### Multiple Outlets

The following route creates sibling components with multiple outlets.
When navigating to `/team/11(aux:chat/jim)`, the router creates the 'Team' component next to
the 'Chat' component. The 'Chat' component is placed into the 'aux' outlet.

```
[{
path: 'team/:id',
component: Team
}, {
path: 'chat/:user',
component: Chat
outlet: 'aux'
}]
```

### Wild Cards

The following route uses wild-card notation to specify a component
that is always instantiated regardless of where you navigate to.

```
[{
path: '**',
component: WildcardComponent
}]
```

### Redirects

The following route uses the `redirectTo` property to ignore a segment of
a given URL when looking for a child path.

When navigating to '/team/11/legacy/user/jim', the router changes the URL segment
'/team/11/legacy/user/jim' to '/team/11/user/jim', and then instantiates
the Team component with the User child component in it.

```
[{
path: 'team/:id',
component: Team,
children: [{
path: 'legacy/user/:name',
redirectTo: 'user/:name'
}, {
path: 'user/:name',
component: User
}]
}]
```

The redirect path can be relative, as shown in this example, or absolute.
If we change the `redirectTo` value in the example to the absolute URL segment '/user/:name',
the result URL is also absolute, '/user/jim'.

### Empty Path

Empty-path route configurations can be used to instantiate components that do not 'consume'
any URL segments.

In the following configuration, when navigating to
`/team/11`, the router instantiates the 'AllUsers' component.

```
[{
path: 'team/:id',
component: Team,
children: [{
path: '',
component: AllUsers
}, {
path: 'user/:name',
component: User
}]
}]
```

Empty-path routes can have children. In the following example, when navigating
to `/team/11/user/jim`, the router instantiates the wrapper component with
the user component in it.

Note that an empty path route inherits its parent's parameters and data.

```
[{
path: 'team/:id',
component: Team,
children: [{
path: '',
component: WrapperCmp,
children: [{
path: 'user/:name',
component: User
}]
}]
}]
```

### Matching Strategy

The default path-match strategy is 'prefix', which means that the router
checks URL elements from the left to see if the URL matches a specified path.
For example, '/team/11/user' matches 'team/:id'.

```
[{
path: '',
pathMatch: 'prefix', //default
redirectTo: 'main'
}, {
path: 'main',
component: Main
}]
```

You can specify the path-match strategy 'full' to make sure that the path
covers the whole unconsumed URL. It is important to do this when redirecting
empty-path routes. Otherwise, because an empty path is a prefix of any URL,
the router would apply the redirect even when navigating to the redirect destination,
creating an endless loop.

In the following example, supplying the 'full' `pathMatch` strategy ensures
that the router applies the redirect if and only if navigating to '/'.

```
[{
path: '',
pathMatch: 'full',
redirectTo: 'main'
}, {
path: 'main',
component: Main
}]
```

### Componentless Routes

You can share parameters between sibling components.
For example, suppose that two sibling components should go next to each other,
and both of them require an ID parameter. You can accomplish this using a route
that does not specify a component at the top level.

In the following example, 'MainChild' and 'AuxChild' are siblings.
When navigating to 'parent/10/(a//aux:b)', the route instantiates
the main child and aux child components next to each other.
For this to work, the application component must have the primary and aux outlets defined.

```
[{
path: 'parent/:id',
children: [
{ path: 'a', component: MainChild },
{ path: 'b', component: AuxChild, outlet: 'aux' }
]
}]
```

The router merges the parameters, data, and resolve of the componentless
parent into the parameters, data, and resolve of the children.

This is especially useful when child components are defined
with an empty path string, as in the following example.
With this configuration, navigating to '/parent/10' creates
the main child and aux components.

```
[{
path: 'parent/:id',
children: [
{ path: '', component: MainChild },
{ path: '', component: AuxChild, outlet: 'aux' }
]
}]
```

### Lazy Loading

Lazy loading speeds up application load time by splitting the application
into multiple bundles and loading them on demand.
To use lazy loading, provide the `loadChildren` property in the `Route` object,
instead of the `children` property.

Given the following example route, the router will lazy load
the associated module on demand using the browser native import system.

```
[{
path: 'lazy',
loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
}];
```

## publicApi

## Properties

| Name | Type     | Description                                                                          |
| ---- | -------- | ------------------------------------------------------------------------------------ |
| path | `string` | The path to match against. Cannot be used together with a custom `matcher` function. |

A URL string that uses router matching notation.
Can be a wild card (`**`) that matches any URL (see Usage Notes below).
Default is "/" (the root path). |
| pathMatch | `string` | The path-matching strategy, one of 'prefix' or 'full'.
Default is 'prefix'.

By default, the router checks URL elements from the left to see if the URL
matches a given path, and stops when there is a match. For example,
'/team/11/user' matches 'team/:id'.

The path-match strategy 'full' matches against the entire URL.
It is important to do this when redirecting empty-path routes.
Otherwise, because an empty path is a prefix of any URL,
the router would apply the redirect even when navigating
to the redirect destination, creating an endless loop. |
| matcher | `UrlMatcher` | A custom URL-matching function. Cannot be used together with `path`. |
| component | `any` | The component to instantiate when the path matches.
Can be empty if child routes specify components. |
| redirectTo | `string` | A URL to redirect to when the path matches.
Absolute if the URL begins with a slash (/), otherwise relative to the path URL.
When not present, router does not redirect. |
| outlet | `string` | Name of a `RouterOutlet` object where the component can be placed
when the path matches. |
| canActivate | `any[]` | An array of dependency-injection tokens used to look up `CanActivate()`
handlers, in order to determine if the current user is allowed to
activate the component. By default, any user can activate. |
| canActivateChild | `any[]` | An array of DI tokens used to look up `CanActivateChild()` handlers,
in order to determine if the current user is allowed to activate
a child of the component. By default, any user can activate a child. |
| canDeactivate | `any[]` | An array of DI tokens used to look up `CanDeactivate()`
handlers, in order to determine if the current user is allowed to
deactivate the component. By default, any user can deactivate. |
| canLoad | `any[]` | An array of DI tokens used to look up `CanLoad()`
handlers, in order to determine if the current user is allowed to
load the component. By default, any user can load. |
| data | `Data` | Additional developer-defined data provided to the component via
`ActivatedRoute`. By default, no additional data is passed. |
| resolve | `ResolveData` | A map of DI tokens used to look up data resolvers. See `Resolve`. |
| children | `Routes` | An array of child `Route` objects that specifies a nested route
configuration. |
| loadChildren | `LoadChildren` | An object specifying lazy-loaded child routes. |
| runGuardsAndResolvers | `RunGuardsAndResolvers` | Defines when guards and resolvers will be run. One of

- `paramsOrQueryParamsChange` : Run when query parameters change.
- `always` : Run on every execution.
  By default, guards and resolvers run only when the matrix
  parameters of the route change. |
  | \_loadedConfig | `LoadedRouterConfig` | Filled for routes with `loadChildren` once the module has been loaded |
