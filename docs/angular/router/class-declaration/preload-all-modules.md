---
kind: ClassDeclaration
name: PreloadAllModules
module: router
---

# PreloadAllModules

## description

Provides a preloading strategy that preloads all modules as quickly as possible.

```
RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
```

```ts
class PreloadAllModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L41-L45)

## publicApi

## Methods

### preload

```ts
preload(route: Route, fn: () => Observable<any>): Observable<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L42-L44)

#### Parameters (#preload-parameters)

| Name  | Type        | Description |
| ----- | ----------- | ----------- |
| route | `Route`     |             |
| fn    | `() => any` |             |
