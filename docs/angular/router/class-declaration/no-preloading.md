---
kind: ClassDeclaration
name: NoPreloading
module: router
---

# NoPreloading

## description

Provides a preloading strategy that does not preload any modules.

This strategy is enabled by default.

```ts
class NoPreloading implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L56-L60)

## publicApi

## Methods

### preload

```ts
preload(route: Route, fn: () => Observable<any>): Observable<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L57-L59)

#### Parameters (#preload-parameters)

| Name  | Type        | Description |
| ----- | ----------- | ----------- |
| route | `Route`     |             |
| fn    | `() => any` |             |
