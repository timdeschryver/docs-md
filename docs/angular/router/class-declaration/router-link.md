---
kind: ClassDeclaration
name: RouterLink
module: router
---

# RouterLink

## description

Lets you link to specific routes in your app.

Consider the following route configuration:
`[{ path: 'user/:name', component: UserCmp }]`.
When linking to this `user/:name` route, you use the `RouterLink` directive.

If the link is static, you can use the directive as follows:
`<a routerLink="/user/bob">link to user component</a>`

If you use dynamic values to generate the link, you can pass an array of path
segments, followed by the params for each segment.

For instance `['/team', teamId, 'user', userName, {details: true}]`
means that we want to generate a link to `/team/11/user/bob;details=true`.

Multiple static segments can be merged into one
(e.g., `['/team/11/user', userName, {details: true}]`).

The first segment name can be prepended with `/`, `./`, or `../`:

- If the first segment begins with `/`, the router will look up the route from the root of the
  app.
- If the first segment begins with `./`, or doesn't begin with a slash, the router will
  instead look in the children of the current activated route.
- And if the first segment begins with `../`, the router will go up one level.

You can set query params and fragment as follows:

```
<a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
link to user component
</a>
```

RouterLink will use these to generate this link: `/user/bob?debug=true#education`.

(Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
directive to preserve the current query params and fragment:

```
<a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
link to user component
</a>
```

You can tell the directive how to handle queryParams. Available options are:

- `'merge'`: merge the queryParams into the current queryParams
- `'preserve'`: preserve the current queryParams
- default/`''`: use the queryParams only

Same options for {@link NavigationExtras#queryParamsHandling
NavigationExtras#queryParamsHandling}.

```
<a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
link to user component
</a>
```

You can provide a `state` value to be persisted to the browser's History.state
property (See https://developer.mozilla.org/en-US/docs/Web/API/History#Properties). It's
used as follows:

```
<a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
link to user component
</a>
```

And later the value can be read from the router through `router.getCurrentNavigation`.
For example, to capture the `tracingId` above during the `NavigationStart` event:

```
// Get NavigationStart events
router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
const navigation = router.getCurrentNavigation();
tracingService.trace({id: navigation.extras.state.tracingId});
});
```

The router link directive always treats the provided input as a delta to the current url.

For instance, if the current url is `/user/(box//aux:team)`.

Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
`/user/(jim//aux:team)`.

See {@link Router#createUrlTree createUrlTree} for more information.

```ts
class RouterLink {
  @Input() queryParams!: { [k: string]: any };
  @Input() fragment!: string;
  @Input() queryParamsHandling!: QueryParamsHandling;
  @Input() preserveFragment!: boolean;
  @Input() skipLocationChange!: boolean;
  @Input() replaceUrl!: boolean;
  @Input() state?: { [k: string]: any };

  @HostListener("click")
  onClick(): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L114-L223)

## ngModule

RouterModule

## publicApi

## Properties

| Name                | Type                    | Description                                                                                    |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| queryParams         | `{ [k: string]: any; }` | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| fragment            | `string`                | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| queryParamsHandling | `QueryParamsHandling`   | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| preserveFragment    | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| skipLocationChange  | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| replaceUrl          | `boolean`               | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |
| state               | `{ [k: string]: any; }` | Passed to {@link Router#createUrlTree Router#createUrlTree} as part of the `NavigationExtras`. |

## Methods

### onClick

```ts
@HostListener('click') onClick(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/directives/router_link.ts#L202-L211)
