---
kind: TypeAliasDeclaration
name: UrlMatcher
module: router
---

# UrlMatcher

## description

A function for matching a route against URLs. Implement a custom URL matcher
for `Route.matcher` when a combination of `path` and `pathMatch`
is not expressive enough. Cannot be used together with `path` and `pathMatch`.

The function takes the following arguments and returns a `UrlMatchResult` object.

- _segments_ : An array of URL segments.
- _group_ : A segment group.
- _route_ : The route to match against.

The following example implementation matches HTML files.

```
export function htmlFiles(url: UrlSegment[]) {
return url.length === 1 && url[0].path.endsWith('.html') ? ({consumed: url}) : null;
}

export const routes = [{ matcher: htmlFiles, component: AnyComponent }];
```

```ts
export type UrlMatcher = (
  segments: UrlSegment[],
  group: UrlSegmentGroup,
  route: Route
) => UrlMatchResult | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L66-L67)

## publicApi
