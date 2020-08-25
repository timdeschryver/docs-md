---
kind: InterfaceDeclaration
name: ɵComponentType
module: core
---

# ɵComponentType

## description

A subclass of `Type` which has a static `ɵcmp`:`ComponentDef` field making it
consumable for rendering.

```ts
interface ComponentType<T> {
  ɵcmp: never;

  // inherited from Type
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L75-L77)

## Properties

| Name | Type    | Description |
| ---- | ------- | ----------- |
| ɵcmp | `never` |             |
