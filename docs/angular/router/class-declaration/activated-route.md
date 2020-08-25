---
kind: ClassDeclaration
name: ActivatedRoute
module: router
---

# ActivatedRoute

## description

Provides access to information about a route associated with a component
that is loaded in an outlet.
Use to traverse the `RouterState` tree and extract information from nodes.

The following example shows how to construct a component using information from a
currently activated route.

{@example router/activated-route/module.ts region="activated-route"
header="activated-route.component.ts"}

```ts
class ActivatedRoute {
  snapshot!: ActivatedRouteSnapshot;
  _futureSnapshot: ActivatedRouteSnapshot;
  _routerState!: RouterState;
  _paramMap!: Observable<ParamMap>;
  _queryParamMap!: Observable<ParamMap>;

  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L108-L197)

## see

[Getting route information](guide/router#getting-route-information)

## publicApi

## Properties

| Name             | Type                     | Description                        |
| ---------------- | ------------------------ | ---------------------------------- |
| snapshot         | `ActivatedRouteSnapshot` | The current snapshot of this route |
| \_futureSnapshot | `ActivatedRouteSnapshot` |                                    |
| \_routerState    | `RouterState`            |                                    |
| \_paramMap       | `any`                    |                                    |
| \_queryParamMap  | `any`                    |                                    |

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L194-L196)
