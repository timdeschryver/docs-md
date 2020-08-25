---
kind: TypeAliasDeclaration
name: RunGuardsAndResolvers
module: router
---

# RunGuardsAndResolvers

## description

A policy for when to run guards and resolvers on a route.

```ts
export type RunGuardsAndResolvers =
  | "pathParamsChange"
  | "pathParamsOrQueryParamsChange"
  | "paramsChange"
  | "paramsOrQueryParamsChange"
  | "always"
  | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L158-L160)

## see

[Route.runGuardsAndResolvers](api/router/Route#runGuardsAndResolvers)

## publicApi
