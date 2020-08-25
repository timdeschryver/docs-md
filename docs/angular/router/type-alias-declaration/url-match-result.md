---
kind: TypeAliasDeclaration
name: UrlMatchResult
module: router
---

# UrlMatchResult

## description

Represents the result of matching URLs with a custom matching function.

- `consumed` is an array of the consumed URL segments.
- `posParams` is a map of positional parameters.

```ts
export type UrlMatchResult = {
  consumed: UrlSegment[];
  posParams?: { [name: string]: UrlSegment };
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/config.ts#L39-L42)

## see

`UrlMatcher()`

## publicApi
