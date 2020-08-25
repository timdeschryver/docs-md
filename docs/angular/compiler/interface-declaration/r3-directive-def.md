---
kind: InterfaceDeclaration
name: R3DirectiveDef
module: compiler
---

# R3DirectiveDef

## description

Output of render3 directive compilation.

```ts
interface R3DirectiveDef {
  expression: o.Expression;
  type: o.Type;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L259-L262)

## Properties

| Name       | Type           | Description |
| ---------- | -------------- | ----------- |
| expression | `o.Expression` |             |
| type       | `o.Type`       |             |
