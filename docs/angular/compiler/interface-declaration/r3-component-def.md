---
kind: InterfaceDeclaration
name: R3ComponentDef
module: compiler
---

# R3ComponentDef

## description

Output of render3 component compilation.

```ts
interface R3ComponentDef {
  expression: o.Expression;
  type: o.Type;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L267-L270)

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| expression | `o.Expression` |             |
| type       | `o.Type`       |             |
