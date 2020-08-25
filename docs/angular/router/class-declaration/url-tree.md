---
kind: ClassDeclaration
name: UrlTree
module: router
---

# UrlTree

## description

Represents the parsed URL.

Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
serialized tree.
UrlTree is a data structure that provides a lot of affordances in dealing with URLs

```ts
class UrlTree {
  _queryParamMap!: ParamMap;

  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L105-L130)

## usageNotes

### Example

```
## Component({templateUrl:'template.html'})

class MyComponent {
constructor(router: Router) {
const tree: UrlTree =
router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
const f = tree.fragment; // return 'fragment'
const q = tree.queryParams; // returns {debug: 'true'}
const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
g.children['support'].segments; // return 1 segment 'help'
}
}
```

## publicApi

## Properties

| Name            | Type       | Description |
| --------------- | ---------- | ----------- |
| \_queryParamMap | `ParamMap` |             |

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L127-L129)
