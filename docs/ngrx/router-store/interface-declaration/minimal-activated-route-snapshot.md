---
kind: InterfaceDeclaration
name: MinimalActivatedRouteSnapshot
module: router-store
---

# MinimalActivatedRouteSnapshot

```ts
interface MinimalActivatedRouteSnapshot {
  routeConfig: ActivatedRouteSnapshot["routeConfig"];
  url: ActivatedRouteSnapshot["url"];
  params: ActivatedRouteSnapshot["params"];
  queryParams: ActivatedRouteSnapshot["queryParams"];
  fragment: ActivatedRouteSnapshot["fragment"];
  data: ActivatedRouteSnapshot["data"];
  outlet: ActivatedRouteSnapshot["outlet"];
  firstChild?: MinimalActivatedRouteSnapshot;
  children: MinimalActivatedRouteSnapshot[];
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/router-store/src/serializers/minimal_serializer.ts#L4-L14)

## Properties

| Name        | Type                                                                                           | Description |
| ----------- | ---------------------------------------------------------------------------------------------- | ----------- |
| routeConfig | `import("C:/Users/tdeschryver/dev/platform/node_modules/@angular/router/router").Route`        |             |
| url         | `import("C:/Users/tdeschryver/dev/platform/node_modules/@angular/router/router").UrlSegment[]` |             |
| params      | `import("C:/Users/tdeschryver/dev/platform/node_modules/@angular/router/router").Params`       |             |
| queryParams | `import("C:/Users/tdeschryver/dev/platform/node_modules/@angular/router/router").Params`       |             |
| fragment    | `string`                                                                                       |             |
| data        | `import("C:/Users/tdeschryver/dev/platform/node_modules/@angular/router/router").Data`         |             |
| outlet      | `string`                                                                                       |             |
| firstChild  | `MinimalActivatedRouteSnapshot`                                                                |             |
| children    | `MinimalActivatedRouteSnapshot[]`                                                              |             |
