---
kind: ClassDeclaration
name: RouterPreloader
module: router
---

# RouterPreloader

## description

The preloader optimistically loads all router configurations to
make navigations into lazily-loaded sections of the application faster.

The preloader runs in the background. When the router bootstraps, the preloader
starts listening to all navigation events. After every such event, the preloader
will check if any configurations can be loaded lazily.

If a route is protected by `canLoad` guards, the preloaded will not load it.

```ts
class RouterPreloader implements OnDestroy {
  setUpPreloading(): void;
  preload(): Observable<any>;
  ngOnDestroy(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L74-L137)

## publicApi

## Methods

### setUpPreloading

```ts
setUpPreloading(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L89-L94)

### preload

```ts
preload(): Observable<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L96-L99)

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_preloader.ts#L104-L106)
