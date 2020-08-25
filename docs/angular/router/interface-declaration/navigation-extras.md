---
kind: InterfaceDeclaration
name: NavigationExtras
module: router
---

# NavigationExtras

## description

Options that modify the `Router` navigation strategy.
Supply an object containing any of these properties to a `Router` navigation function to
control how the target URL should be constructed or interpreted.

```ts
interface NavigationExtras {
  relativeTo?: ActivatedRoute | null;
  queryParams?: Params | null;
  fragment?: string;
  preserveQueryParams?: boolean;
  queryParamsHandling?: QueryParamsHandling | null;
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: { [k: string]: any };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L50-L181)

## see

[Router.navigate() method](api/router/Router#navigate)
[Router.navigateByUrl() method](api/router/Router#navigatebyurl)
[Router.createUrlTree() method](api/router/Router#createurltree)
[Routing and Navigation guide](guide/router)

## publicApi

## Properties

| Name       | Type             | Description                                          |
| ---------- | ---------------- | ---------------------------------------------------- |
| relativeTo | `ActivatedRoute` | Specifies a root URI to use for relative navigation. |

For example, consider the following route configuration where the parent route
has two children.

```
[{
path: 'parent',
component: ParentComponent,
children: [{
path: 'list',
component: ListComponent
},{
path: 'child',
component: ChildComponent
}]
}]
```

The following `go()` function navigates to the `list` route by
interpreting the destination URI as relative to the activated `child` route

```|
| queryParams | `Params` | Sets query parameters to the URL.

```

// Navigate to /results?page=1
this.router.navigate(['/results'], { queryParams: { page: 1 } });

```|
| fragment | `string` | Sets the hash fragment for the URL.

```

// Navigate to /results#top
this.router.navigate(['/results'], { fragment: 'top' });

```|
| preserveQueryParams | `boolean` | **DEPRECATED**: Use `queryParamsHandling: "preserve"` instead to preserve
query parameters for the next navigation. |
| queryParamsHandling | `QueryParamsHandling` | How to handle query parameters in the router link for the next navigation.
One of:
* `preserve` : Preserve current parameters.
* `merge` : Merge new with current parameters.

The "preserve" option discards any new query params:
```

// from /view1?page=1 to/view2?page=1
this.router.navigate(['/view2'], { queryParams: { page: 2 }, queryParamsHandling: "preserve"
});

```
The "merge" option appends new query params to the params from the current URL:
```

// from /view1?page=1 to/view2?page=1&otherKey=2
this.router.navigate(['/view2'], { queryParams: { otherKey: 2 }, queryParamsHandling: "merge"
});

```
In case of a key collision between current parameters and those in the `queryParams` object,
the new value is used. |
| preserveFragment | `boolean` | When true, preserves the URL fragment for the next navigation

```

// Preserve fragment from /results#top to /view#top
this.router.navigate(['/view'], { preserveFragment: true });

```|
| skipLocationChange | `boolean` | When true, navigates without pushing a new state into history.

```

// Navigate silently to /view
this.router.navigate(['/view'], { skipLocationChange: true });

```|
| replaceUrl | `boolean` | When true, navigates while replacing the current state in history.

```

// Navigate to /view
this.router.navigate(['/view'], { replaceUrl: true });

```|
| state | `{ [k: string]: any; }` | Developer-defined state that can be passed to any navigation.
Access this value through the `Navigation.extras` object
returned from the [Router.getCurrentNavigation()
method](api/router/Router#getcurrentnavigation) while a navigation is executing.

After a navigation completes, the router writes an object containing this
value together with a `navigationId` to `history.state`.
The value is written when `location.go()` or `location.replaceState()`
is called before activating this route.

Note that `history.state` does not pass an object equality test because
the router adds the `navigationId` on each navigation. |
```
