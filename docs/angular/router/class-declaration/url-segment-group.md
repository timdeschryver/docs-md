---
kind: ClassDeclaration
name: UrlSegmentGroup
module: router
---

# UrlSegmentGroup

## description

Represents the parsed URL segment group.

See `UrlTree` for more information.

```ts
class UrlSegmentGroup {
  _sourceSegment!: UrlSegmentGroup;
  _segmentIndexShift!: number;
  parent: UrlSegmentGroup | null = null;

  hasChildren(): boolean;
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L141-L173)

## publicApi

## Properties

| Name                | Type              | Description                     |
| ------------------- | ----------------- | ------------------------------- |
| \_sourceSegment     | `UrlSegmentGroup` |                                 |
| \_segmentIndexShift | `number`          |                                 |
| parent              | `UrlSegmentGroup` | The parent node in the url tree |

## Methods

### hasChildren

```ts
hasChildren(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L160-L162)

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/url_tree.ts#L170-L172)
