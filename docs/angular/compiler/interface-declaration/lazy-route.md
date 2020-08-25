---
kind: InterfaceDeclaration
name: LazyRoute
module: compiler
---

# LazyRoute

```ts
interface LazyRoute {
  module: StaticSymbol;
  route: string;
  referencedModule: StaticSymbol;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/lazy_routes.ts#L15-L19)

## Properties

| Name             | Type           | Description |
| ---------------- | -------------- | ----------- |
| module           | `StaticSymbol` |             |
| route            | `string`       |             |
| referencedModule | `StaticSymbol` |             |
