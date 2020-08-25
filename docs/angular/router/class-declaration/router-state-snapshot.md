---
kind: ClassDeclaration
name: RouterStateSnapshot
module: router
---

# RouterStateSnapshot

## description

Represents the state of the router at a moment in time.

This is a tree of activated route snapshots. Every node in this tree knows about
the "consumed" URL segments, the extracted parameters, and the resolved data.

The following example shows how a component is initialized with information
from the snapshot of the root node's state at the time of creation.

````

```ts
class RouterStateSnapshot extends Tree<ActivatedRouteSnapshot> {
toString(): string;
}
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L393-L405)

## Component({templateUrl:'template.html'})

class MyComponent {
constructor(router: Router) {
const state: RouterState = router.routerState;
const snapshot: RouterStateSnapshot = state.snapshot;
const root: ActivatedRouteSnapshot = snapshot.root;
const child = root.firstChild;
const id: Observable<string> = child.params.map(p => p.id);
//...
}
}

````

## publicApi


## Methods
### toString
```ts
toString(): string;
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_state.ts#L402-L404)
