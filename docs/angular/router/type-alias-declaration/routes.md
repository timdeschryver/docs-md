---
kind: TypeAliasDeclaration
name: Routes
module: router
---

# Routes

## description

Represents a route configuration for the Router service.
An array of `Route` objects, used in `Router.config` and for nested route configurations
in `Route.children`.

```ts
export type Routes = Route[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L28-L28)

## see

`Route`
`Router`
[Router configuration guide](guide/router#configuration)

## publicApi
