---
kind: ClassDeclaration
name: UrlSegment
module: router
---

# UrlSegment

## description

Represents a single URL segment.

A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
parameters associated with the segment.

```ts
class UrlSegment {
  _parameterMap!: ParamMap;

  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L202-L225)

## usageNotes

### Example

```
## Component({templateUrl:'template.html'})

class MyComponent {
constructor(router: Router) {
const tree: UrlTree = router.parseUrl('/team;id=33');
const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
const s: UrlSegment[] = g.segments;
s[0].path; // returns 'team'
s[0].parameters; // returns {id: 33}
}
}
```

## publicApi

## Properties

| Name           | Type       | Description |
| -------------- | ---------- | ----------- |
| \_parameterMap | `ParamMap` |             |

## Methods

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L222-L224)
