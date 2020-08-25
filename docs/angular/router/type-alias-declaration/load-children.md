---
kind: TypeAliasDeclaration
name: LoadChildren
module: router
---

# LoadChildren

## description

A function that returns a set of routes to load.

The string form of `LoadChildren` is deprecated (see `DeprecatedLoadChildren`). The function
form (`LoadChildrenCallback`) should be used instead.

```ts
export type LoadChildren = LoadChildrenCallback | DeprecatedLoadChildren;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L124-L124)

## see

`loadChildrenCallback`

## publicApi
