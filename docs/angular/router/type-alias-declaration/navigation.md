---
kind: TypeAliasDeclaration
name: Navigation
module: router
---

# Navigation

## description

Information about a navigation operation.
Retrieve the most recent navigation object with the
[Router.getCurrentNavigation() method](api/router/Router#getcurrentnavigation) .

- _id_ : The unique identifier of the current navigation.
- _initialUrl_ : The target URL passed into the `Router#navigateByUrl()` call before navigation.
  This is the value before the router has parsed or applied redirects to it.
- _extractedUrl_ : The initial target URL after being parsed with `UrlSerializer.extract()`.
- _finalUrl_ : The extracted URL after redirects have been applied.
  This URL may not be available immediately, therefore this property can be `undefined`.
  It is guaranteed to be set after the `RoutesRecognized` event fires.
- _trigger_ : Identifies how this navigation was triggered.
  -- 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
  -- 'popstate'--Triggered by a popstate event.
  -- 'hashchange'--Triggered by a hashchange event.
- _extras_ : A `NavigationExtras` options object that controlled the strategy used for this
  navigation.
- _previousNavigation_ : The previously successful `Navigation` object. Only one previous
  navigation is available, therefore this previous `Navigation` object has a `null` value for its
  own `previousNavigation`.

```ts
export type Navigation = {
  /**
   * The unique identifier of the current navigation.
   */
  id: number;
  /**
   * The target URL passed into the `Router#navigateByUrl()` call before navigation. This is
   * the value before the router has parsed or applied redirects to it.
   */
  initialUrl: string | UrlTree;
  /**
   * The initial target URL after being parsed with `UrlSerializer.extract()`.
   */
  extractedUrl: UrlTree;
  /**
   * The extracted URL after redirects have been applied.
   * This URL may not be available immediately, therefore this property can be `undefined`.
   * It is guaranteed to be set after the `RoutesRecognized` event fires.
   */
  finalUrl?: UrlTree;
  /**
   * Identifies how this navigation was triggered.
   *
   * * 'imperative'--Triggered by `router.navigateByUrl` or `router.navigate`.
   * * 'popstate'--Triggered by a popstate event.
   * * 'hashchange'--Triggered by a hashchange event.
   */
  trigger: "imperative" | "popstate" | "hashchange";
  /**
   * Options that controlled the strategy used for this navigation.
   * See `NavigationExtras`.
   */
  extras: NavigationExtras;
  /**
   * The previously successful `Navigation` object. Only one previous navigation
   * is available, therefore this previous `Navigation` object has a `null` value
   * for its own `previousNavigation`.
   */
  previousNavigation: Navigation | null;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router.ts#L231-L270)

## publicApi
