---
kind: TypeAliasDeclaration
name: LoadChildrenCallback
module: router
---

# LoadChildrenCallback

## description

A function that is called to resolve a collection of lazy-loaded routes.
Must be an arrow function of the following form:
`() => import('...').then(mod => mod.MODULE)`

For example:

```
[{
path: 'lazy',
loadChildren: () => import('./lazy-route/lazy.module').then(mod => mod.LazyModule),
}];
```

```ts
export type LoadChildrenCallback = () =>
  | Type<any>
  | NgModuleFactory<any>
  | Observable<Type<any>>
  | Promise<NgModuleFactory<any> | Type<any> | any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L111-L112)

## see

[Route.loadChildren](api/router/Route#loadChildren)

## publicApi
