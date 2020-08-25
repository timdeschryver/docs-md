---
kind: InterfaceDeclaration
name: Target
module: compiler
---

# Target

## description

A logical target for analysis, which could contain a template or other types of bindings.

```ts
interface Target {
  template?: Node[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_api.ts#L25-L27)

## Properties

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| template | `Node[]` |             |
