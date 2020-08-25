---
kind: ClassDeclaration
name: RouterState
module: router
---

# RouterState

## description

Represents the state of the router as a tree of activated routes.

```ts
class RouterState extends Tree<ActivatedRoute> {
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L52-L65)

## usageNotes

Every node in the route tree is an `ActivatedRoute` instance
that knows about the "consumed" URL segments, the extracted parameters,
and the resolved data.
Use the `ActivatedRoute` properties to traverse the tree from any node.

The following fragment shows how a component gets the root node
of the current state to establish its own route tree:

```
## Component({templateUrl:'template.html'})

class MyComponent {
constructor(router: Router) {
const state: RouterState = router.routerState;
const root: ActivatedRoute = state.root;
const child = root.firstChild;
const id: Observable<string> = child.params.map(p => p.id);
//...
}
}
```

## see

`ActivatedRoute`
[Getting route information](guide/router#getting-route-information)

## publicApi

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L62-L64)
