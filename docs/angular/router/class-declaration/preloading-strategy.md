---
kind: ClassDeclaration
name: PreloadingStrategy
module: router
---

# PreloadingStrategy

## description

Provides a preloading strategy.

```ts
class PreloadingStrategy {
  abstract preload(route: Route, fn: () => Observable<any>): Observable<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L26-L28)

## publicApi

## Methods

### preload

```ts
abstract preload(route: Route, fn: () => Observable<any>): Observable<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L27-L27)

#### Parameters (#preload-parameters)

| Name  | Type        | Description |
| ----- | ----------- | ----------- |
| route | `Route`     |             |
| fn    | `() => any` |             |
