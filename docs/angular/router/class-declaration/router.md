---
kind: ClassDeclaration
name: Router
module: router
---

# Router

## description

A service that provides navigation among views and URL manipulation capabilities.

```ts
class Router {
  public readonly events: Observable<Event> = new Subject<Event>();
  public readonly routerState: RouterState;
  errorHandler: ErrorHandler = defaultErrorHandler;
  malformedUriErrorHandler: (
    error: URIError,
    urlSerializer: UrlSerializer,
    url: string
  ) => UrlTree = defaultMalformedUriErrorHandler;
  navigated: boolean = false;
  hooks: {
    beforePreactivation: RouterHook;
    afterPreactivation: RouterHook;
  } = {
    beforePreactivation: defaultRouterHook,
    afterPreactivation: defaultRouterHook,
  };
  urlHandlingStrategy: UrlHandlingStrategy = new DefaultUrlHandlingStrategy();
  routeReuseStrategy: RouteReuseStrategy = new DefaultRouteReuseStrategy();
  onSameUrlNavigation: "reload" | "ignore" = "ignore";
  paramsInheritanceStrategy: "emptyOnly" | "always" = "emptyOnly";
  urlUpdateStrategy: "deferred" | "eager" = "deferred";
  relativeLinkResolution: "legacy" | "corrected" = "legacy";

  resetRootComponentType(rootComponentType: Type<any>): void;
  initialNavigation(): void;
  setUpLocationChangeListener(): void;
  getCurrentNavigation(): Navigation | null;
  triggerEvent(event: Event): void;
  resetConfig(config: Routes): void;
  ngOnDestroy(): void;
  dispose(): void;
  createUrlTree(
    commands: any[],
    navigationExtras: NavigationExtras = {}
  ): UrlTree;
  navigateByUrl(
    url: string | UrlTree,
    extras: NavigationExtras = { skipLocationChange: false }
  ): Promise<boolean>;
  navigate(
    commands: any[],
    extras: NavigationExtras = { skipLocationChange: false }
  ): Promise<boolean>;
  serializeUrl(url: UrlTree): string;
  parseUrl(url: string): UrlTree;
  isActive(url: string | UrlTree, exact: boolean): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L339-L1316)

## see

`Route`.
[Routing and Navigation Guide](guide/router).

## ngModule

RouterModule

## publicApi

## Properties

| Name                     | Type                                                                      | Description                                           |
| ------------------------ | ------------------------------------------------------------------------- | ----------------------------------------------------- |
| events                   | `any`                                                                     | An event stream for routing events in this NgModule.  |
| routerState              | `RouterState`                                                             | The current state of routing in this NgModule.        |
| errorHandler             | `ErrorHandler`                                                            | A handler for navigation errors in this NgModule.     |
| malformedUriErrorHandler | `(error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree` | A handler for errors thrown by `Router.parseUrl(url)` |

when `url` contains an invalid character.
The most common case is a `%` sign
that's not encoded and is not part of a percent encoded sequence. |
| navigated | `boolean` | True if at least one navigation event has occurred,
false otherwise. |
| hooks | `{ beforePreactivation: RouterHook; afterPreactivation: RouterHook; }` | Hooks that enable you to pause navigation,
either before or after the preactivation phase.
Used by `RouterModule`. |
| urlHandlingStrategy | `UrlHandlingStrategy` | A strategy for extracting and merging URLs.
Used for AngularJS to Angular migrations. |
| routeReuseStrategy | `RouteReuseStrategy` | A strategy for re-using routes. |
| onSameUrlNavigation | `"reload" | "ignore"` | How to handle a navigation request to the current URL. One of:

- `'ignore'` : The router ignores the request.
- `'reload'` : The router reloads the URL. Use to implement a "refresh" feature. |
  | paramsInheritanceStrategy | `"emptyOnly" | "always"` | How to merge parameters, data, and resolved data from parent to child
  routes. One of:

- `'emptyOnly'` : Inherit parent parameters, data, and resolved data
  for path-less or component-less routes.
- `'always'` : Inherit parent parameters, data, and resolved data
  for all child routes. |
  | urlUpdateStrategy | `"deferred" | "eager"` | Determines when the router updates the browser URL.
  By default (`"deferred"`), updates the browser URL after navigation has finished.
  Set to `'eager'` to update the browser URL at the beginning of navigation.
  You can choose to update early so that, if navigation fails,
  you can show an error message with the URL that failed. |
  | relativeLinkResolution | `"legacy" | "corrected"` | Enables a bug fix that corrects relative link resolution in components with empty paths. |

## Methods

### resetRootComponentType

```ts
resetRootComponentType(rootComponentType: Type<any>): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L875-L880)

#### internal (#resetRootComponentType-internal)

TODO: this should be removed once the constructor of the router made internal

#### Parameters (#resetRootComponentType-parameters)

| Name              | Type  | Description |
| ----------------- | ----- | ----------- |
| rootComponentType | `any` |             |

### initialNavigation

#### description (#initialNavigation-description)

Sets up the location change listener and performs the initial navigation.

```ts
initialNavigation(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L898-L903)

### setUpLocationChangeListener

#### description (#setUpLocationChangeListener-description)

Sets up the location change listener. This listener detects navigations triggered from outside
the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
navigation so that the correct events, guards, etc. are triggered.

```ts
setUpLocationChangeListener(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L910-L928)

### getCurrentNavigation

```ts
getCurrentNavigation(): Navigation|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L972-L974)

### triggerEvent

```ts
triggerEvent(event: Event): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L977-L979)

#### Parameters (#triggerEvent-parameters)

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| event | `Event` |             |

### resetConfig

#### description (#resetConfig-description)

Resets the route configuration used for navigation and generating links.

```ts
resetConfig(config: Routes): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L997-L1002)

#### Parameters (#resetConfig-parameters)

| Name   | Type     | Description                                |
| ------ | -------- | ------------------------------------------ |
| config | `Routes` | The route array for the new configuration. |

#### usageNotes (#resetConfig-usage-notes)

```
router.resetConfig([
{ path: 'team/:id', component: TeamCmp, children: [
{ path: 'simple', component: SimpleCmp },
{ path: 'user/:name', component: UserCmp }
]}
]);
```

### ngOnDestroy

```ts
ngOnDestroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1005-L1007)

### dispose

```ts
dispose(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1010-L1015)

### createUrlTree

#### description (#createUrlTree-description)

Appends URL segments to the current URL tree to create a new URL tree.

```ts
createUrlTree(commands: any[], navigationExtras: NavigationExtras = {}): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1063-L1096)

#### Parameters (#createUrlTree-parameters)

| Name             | Type               | Description                                                         |
| ---------------- | ------------------ | ------------------------------------------------------------------- |
| commands         | `any[]`            | An array of URL fragments with which to construct the new URL tree. |
| navigationExtras | `NavigationExtras` | Options that control the navigation strategy. This function         |

#### returns (#createUrlTree-returns)

The new URL tree.

#### usageNotes (#createUrlTree-usage-notes)

```
// create /team/33/user/11
router.createUrlTree(['/team', 33, 'user', 11]);

// create /team/33;expand=true/user/11
router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);

// you can collapse static segments like this (this works only with the first passed-in value):
router.createUrlTree(['/team/33/user', userId]);

// If the first segment can contain slashes, and you do not want the router to split it,
// you can do the following:
router.createUrlTree([{segmentPath: '/one/two'}]);

// create /team/33/(user/11//right:chat)
router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);

// remove the right secondary node
router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);

// assuming the current url is `/team/33/user/11` and the route points to `user/11`

// navigate to /team/33/user/11/details
router.createUrlTree(['details'], {relativeTo: route});

// navigate to /team/33/user/22
router.createUrlTree(['../22'], {relativeTo: route});

// navigate to /team/44/user/22
router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
```

### navigateByUrl

#### description (#navigateByUrl-description)

Navigates to a view using an absolute route path.

```ts
navigateByUrl(url: string|UrlTree, extras: NavigationExtras = {skipLocationChange: false}):   Promise<boolean>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1124-L1135)

#### Parameters (#navigateByUrl-parameters)

| Name   | Type               | Description                                                          |
| ------ | ------------------ | -------------------------------------------------------------------- |
| url    | `string            | UrlTree`                                                             | An absolute path for a defined route. The function does not apply any delta to the |
| extras | `NavigationExtras` | An object containing properties that modify the navigation strategy. |

#### returns (#navigateByUrl-returns)

A Promise that resolves to 'true' when navigation succeeds,
to 'false' when navigation fails, or is rejected on error.

#### usageNotes (#navigateByUrl-usage-notes)

The following calls request navigation to an absolute path.

```
router.navigateByUrl("/team/33/user/11");

// Navigate without updating the URL
router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
```

#### see (#navigateByUrl-see)

[Routing and Navigation guide](guide/router)

### navigate

#### description (#navigate-description)

Navigate based on the provided array of commands and a starting point.
If no starting route is provided, the navigation is absolute.

```ts
navigate(commands: any[], extras: NavigationExtras = {skipLocationChange: false}):   Promise<boolean>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1167-L1171)

#### Parameters (#navigate-parameters)

| Name     | Type               | Description                                                            |
| -------- | ------------------ | ---------------------------------------------------------------------- |
| commands | `any[]`            | An array of URL fragments with which to construct the target URL.      |
| extras   | `NavigationExtras` | An options object that determines how the URL should be constructed or |

#### returns (#navigate-returns)

A Promise that resolves to `true` when navigation succeeds, to `false` when navigation
fails,
or is rejected on error.

#### usageNotes (#navigate-usage-notes)

The following calls request navigation to a dynamic route path relative to the current URL.

```
router.navigate(['team', 33, 'user', 11], {relativeTo: route});

// Navigate without updating the URL, overriding the default behavior
router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
```

#### see (#navigate-see)

[Routing and Navigation guide](guide/router)

### serializeUrl

```ts
serializeUrl(url: UrlTree): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1174-L1176)

#### Parameters (#serializeUrl-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| url  | `UrlTree` |             |

### parseUrl

```ts
parseUrl(url: string): UrlTree;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1179-L1187)

#### Parameters (#parseUrl-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| url  | `string` |             |

### isActive

```ts
isActive(url: string|UrlTree, exact: boolean): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L1190-L1197)

#### Parameters (#isActive-parameters)

| Name  | Type      | Description |
| ----- | --------- | ----------- |
| url   | `string   | UrlTree`    |  |
| exact | `boolean` |             |
