---
kind: ClassDeclaration
name: RouteReuseStrategy
module: router
---

# RouteReuseStrategy

## description

Provides a way to customize when activated routes get reused.

```ts
class RouteReuseStrategy {
  abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;
  abstract store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null
  ): void;
  abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;
  abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null;
  abstract shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L41-L60)

## publicApi

## Methods

### shouldDetach

```ts
abstract shouldDetach(route: ActivatedRouteSnapshot): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L43-L43)

#### Parameters (#shouldDetach-parameters)

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| route | `ActivatedRouteSnapshot` |             |

### store

#### description (#store-description)

Stores the detached route.

Storing a `null` value should erase the previously stored value.

```ts
abstract store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L50-L50)

#### Parameters (#store-parameters)

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| route  | `ActivatedRouteSnapshot` |             |
| handle | `DetachedRouteHandle`    |             |

### shouldAttach

```ts
abstract shouldAttach(route: ActivatedRouteSnapshot): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L53-L53)

#### Parameters (#shouldAttach-parameters)

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| route | `ActivatedRouteSnapshot` |             |

### retrieve

```ts
abstract retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L56-L56)

#### Parameters (#retrieve-parameters)

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| route | `ActivatedRouteSnapshot` |             |

### shouldReuseRoute

```ts
abstract shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/route_reuse_strategy.ts#L59-L59)

#### Parameters (#shouldReuseRoute-parameters)

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| future | `ActivatedRouteSnapshot` |             |
| curr   | `ActivatedRouteSnapshot` |             |
