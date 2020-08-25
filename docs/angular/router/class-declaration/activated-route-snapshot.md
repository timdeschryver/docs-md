---
kind: ClassDeclaration
name: ActivatedRouteSnapshot
module: router
---

# ActivatedRouteSnapshot

## description

Contains the information about a route associated with a component loaded in an
outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
traverse the router state tree.

The following example initializes a component with route information extracted
from the snapshot of the root node at the time of creation.

````

```ts
class ActivatedRouteSnapshot {
public readonly routeConfig: Route | null;
_urlSegment: UrlSegmentGroup;
_lastPathIndex: number;
_resolve: ResolveData;
_resolvedData!: Data;
_routerState!: RouterStateSnapshot;
_paramMap!: ParamMap;
_queryParamMap!: ParamMap;

toString(): string;
}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L275-L364)

## Component({templateUrl:'./my-component.html'})

class MyComponent {
constructor(route: ActivatedRoute) {
const id: string = route.snapshot.params.id;
const url: string = route.snapshot.url.join('');
const user = route.snapshot.data.user;
}
}

````

## publicApi


## Properties

| Name  | Type | Description  |
| ----- |----- | ------------ |
| routeConfig | `Route` | The configuration used to match this route |
| _urlSegment | `UrlSegmentGroup` |  |
| _lastPathIndex | `number` |  |
| _resolve | `ResolveData` |  |
| _resolvedData | `Data` |  |
| _routerState | `RouterStateSnapshot` |  |
| _paramMap | `ParamMap` |  |
| _queryParamMap | `ParamMap` |  |
## Methods
### toString
```ts
toString(): string;
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L359-L363)
