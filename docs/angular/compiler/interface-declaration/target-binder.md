---
kind: InterfaceDeclaration
name: TargetBinder
module: compiler
---

# TargetBinder

## description

Interface to the binding API, which processes a template and returns an object similar to the
`ts.TypeChecker`.

The returned `BoundTarget` has an API for extracting information about the processed target.

```ts
interface TargetBinder<D extends DirectiveMeta> {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_api.ts#L72-L74)
