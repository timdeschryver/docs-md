---
kind: FunctionDeclaration
name: ɵtransitiveScopesFor
module: core
---

# ɵtransitiveScopesFor

## description

Compute the pair of transitive scopes (compilation scope and exported scope) for a given module.

This operation is memoized and the result is cached on the module's definition. This function can
be called on modules with components that have not fully compiled yet, but the result should not
be used until they have.

```ts
function transitiveScopesFor<T>(moduleType: Type<T>): NgModuleTransitiveScopes;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/module.ts#L442-L528)

## Parameters

| Name       | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| moduleType | `Type<T>` | module that transitive scope should be calculated for. |
