---
kind: InterfaceDeclaration
name: ExtraOptions
module: router
---

# ExtraOptions

## description

A set of configuration options for a router module, provided in the
`forRoot()` method.

```ts
interface ExtraOptions {
  enableTracing?: boolean;
  useHash?: boolean;
  initialNavigation?: InitialNavigation;
  errorHandler?: ErrorHandler;
  preloadingStrategy?: any;
  onSameUrlNavigation?: "reload" | "ignore";
  scrollPositionRestoration?: "disabled" | "enabled" | "top";
  anchorScrolling?: "disabled" | "enabled";
  scrollOffset?: [number, number] | (() => [number, number]);
  paramsInheritanceStrategy?: "emptyOnly" | "always";
  malformedUriErrorHandler?: (
    error: URIError,
    urlSerializer: UrlSerializer,
    url: string
  ) => UrlTree;
  urlUpdateStrategy?: "deferred" | "eager";
  relativeLinkResolution?: "legacy" | "corrected";
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/router_module.ts#L261-L432)

## see

`forRoot()`

## publicApi

## Properties

| Name                        | Type                | Description                                                        |
| --------------------------- | ------------------- | ------------------------------------------------------------------ |
| enableTracing               | `boolean`           | When true, log all internal navigation events to the console.      |
| Use for debugging.          |
| useHash                     | `boolean`           | When true, enable the location strategy that uses the URL fragment |
| instead of the history API. |
| initialNavigation           | `InitialNavigation` | One of `enabled` or `disabled`.                                    |

When set to `enabled`, the initial navigation starts before the root component is created.
The bootstrap is blocked until the initial navigation is complete. This value is required for
[server-side rendering](guide/universal) to work.
When set to `disabled`, the initial navigation is not performed.
The location listener is set up before the root component gets created.
Use if there is a reason to have more control over when the router
starts its initial navigation due to some complex initialization logic.

Legacy values are deprecated since v4 and should not be used for new applications:

- `legacy_enabled` - Default for compatibility.
  The initial navigation starts after the root component has been created,
  but the bootstrap is not blocked until the initial navigation is complete.
- `legacy_disabled` - The initial navigation is not performed.
  The location listener is set up after the root component gets created.
- `true` - same as `legacy_enabled`.
- `false` - same as `legacy_disabled`. |
  | errorHandler | `ErrorHandler` | A custom error handler for failed navigations.
  If the handler returns a value, the navigation Promise is resolved with this value.
  If the handler throws an exception, the navigation Promise is rejected with the exception. |
  | preloadingStrategy | `any` | Configures a preloading strategy.
  One of `PreloadAllModules` or `NoPreloading` (the default). |
  | onSameUrlNavigation | `"reload" | "ignore"` | Define what the router should do if it receives a navigation request to the current URL.
  Default is `ignore`, which causes the router ignores the navigation.
  This can disable features such as a "refresh" button.
  Use this option to configure the behavior when navigating to the
  current URL. Default is 'ignore'. |
  | scrollPositionRestoration | `"enabled" | "disabled" | "top"` | Configures if the scroll position needs to be restored when navigating back.

- 'disabled'- (Default) Does nothing. Scroll position is maintained on navigation.
- 'top'- Sets the scroll position to x = 0, y = 0 on all navigation.
- 'enabled'- Restores the previous scroll position on backward navigation, else sets the
  position to the anchor if one is provided, or sets the scroll position to [0, 0] (forward
  navigation). This option will be the default in the future.

You can implement custom scroll restoration behavior by adapting the enabled behavior as
in the following example.

````typescript
class AppModule {
constructor(router: Router, viewportScroller: ViewportScroller) {
router.events.pipe(
filter((e: Event): e is Scroll => e instanceof Scroll)
).subscribe(e => {
if (e.position) {
// backward navigation
viewportScroller.scrollToPosition(e.position);
} else if (e.anchor) {
// anchor navigation
viewportScroller.scrollToAnchor(e.anchor);
} else {
// forward navigation
viewportScroller.scrollToPosition([0, 0]);
}
});
}
}
``` |
| anchorScrolling | `"enabled" | "disabled"` | When set to 'enabled', scrolls to the anchor element when the URL has a fragment.
Anchor scrolling is disabled by default.

Anchor scrolling does not happen on 'popstate'. Instead, we restore the position
that we stored or scroll to the top. |
| scrollOffset | `[number, number] | (() => [number, number])` | Configures the scroll offset the router will use when scrolling to an element.

When given a tuple with x and y position value,
the router uses that offset each time it scrolls.
When given a function, the router invokes the function every time
it restores scroll position. |
| paramsInheritanceStrategy | `"emptyOnly" | "always"` | Defines how the router merges parameters, data, and resolved data from parent to child
routes. By default ('emptyOnly'), inherits parent parameters only for
path-less or component-less routes.
Set to 'always' to enable unconditional inheritance of parent parameters. |
| malformedUriErrorHandler | `(error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree` | A custom handler for malformed URI errors. The handler is invoked when `encodedURI` contains
invalid character sequences.
The default implementation is to redirect to the root URL, dropping
any path or parameter information. The function takes three parameters:

- `'URIError'` - Error thrown when parsing a bad URL.
- `'UrlSerializer'` - UrlSerializer that’s configured with the router.
- `'url'` -  The malformed URL that caused the URIError |
| urlUpdateStrategy | `"deferred" | "eager"` | Defines when the router updates the browser URL. By default ('deferred'),
update after successful navigation.
Set to 'eager' if prefer to update the URL at the beginning of navigation.
Updating the URL early allows you to handle a failure of navigation by
showing an error message with the URL that failed. |
| relativeLinkResolution | `"legacy" | "corrected"` | Enables a bug fix that corrects relative link resolution in components with empty paths.
Example:

````

const routes = [
{
path: '',
component: ContainerComponent,
children: [
{ path: 'a', component: AComponent },
{ path: 'b', component: BComponent },
]
}
];

```

From the `ContainerComponent`, this will not work:

`<a [routerLink]="['./a']">Link to A</a>`

However, this will work:

`<a [routerLink]="['../a']">Link to A</a>`

In other words, you're required to use `../` rather than `./`. This is currently the default
behavior. Setting this option to `corrected` enables the fix. |
```
