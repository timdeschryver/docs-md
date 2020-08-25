---
kind: InterfaceDeclaration
name: ParamMap
module: router
---

# ParamMap

## description

A map that provides access to the required and optional parameters
specific to a route.
The map supports retrieving a single value with `get()`
or multiple values with `getAll()`.

```ts
interface ParamMap {
  readonly keys: string[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/router/src/shared.ts#L41-L67)

## see

[URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

## publicApi

## Properties

| Name | Type       | Description                         |
| ---- | ---------- | ----------------------------------- |
| keys | `string[]` | Names of the parameters in the map. |
