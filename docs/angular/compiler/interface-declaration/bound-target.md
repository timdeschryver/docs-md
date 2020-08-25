---
kind: InterfaceDeclaration
name: BoundTarget
module: compiler
---

# BoundTarget

## description

Result of performing the binding operation against a `Target`.

The original `Target` is accessible, as well as a suite of methods for extracting binding
information regarding the `Target`.

```ts
interface BoundTarget<DirectiveT extends DirectiveMeta> {
  readonly target: Target;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_api.ts#L84-L148)

## Parameters

| Name       | Type | Description             |
| ---------- | ---- | ----------------------- |
| DirectiveT | ``   | directive metadata type |

## Properties

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| target | `Target` | Get the original `Target` that was bound. |
