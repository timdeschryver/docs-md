---
kind: InterfaceDeclaration
name: TrackByFunction
module: core
---

# TrackByFunction

## description

An optional function passed into the `NgForOf` directive that defines how to track
changes for items in an iterable.
The function takes the iteration index and item ID.
When supplied, Angular tracks changes by the return value of the function.

```ts
interface TrackByFunction<T> {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L129-L131)

## publicApi
