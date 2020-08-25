---
kind: TypeAliasDeclaration
name: QueryParamsHandling
module: router
---

# QueryParamsHandling

## description

How to handle query parameters in a router link.
One of:

- `merge` : Merge new with current parameters.
- `preserve` : Preserve current parameters.

```ts
export type QueryParamsHandling = "merge" | "preserve" | "";
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L149-L149)

## see

`NavigationExtras#queryParamsHandling`
`RouterLink`

## publicApi
