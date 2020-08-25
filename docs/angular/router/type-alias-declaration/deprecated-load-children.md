---
kind: TypeAliasDeclaration
name: DeprecatedLoadChildren
module: router
---

# DeprecatedLoadChildren

## description

A string of the form `path/to/file#exportName` that acts as a URL for a set of routes to load.

```ts
export type DeprecatedLoadChildren = string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L136-L136)

## see

`loadChildrenCallback`

## publicApi

## deprecated

The `string` form of `loadChildren` is deprecated in favor of the
`LoadChildrenCallback` function which uses the ES dynamic `import()` expression.
This offers a more natural and standards-based mechanism to dynamically
load an ES module at runtime.
