---
kind: InterfaceDeclaration
name: ɵDirectiveType
module: core
---

# ɵDirectiveType

## description

A subclass of `Type` which has a static `ɵdir`:`DirectiveDef` field making it
consumable for rendering.

```ts
interface DirectiveType<T> {
  ɵdir: never;
  ɵfac: () => T;

  // inherited from Type
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/definition.ts#L83-L86)

## Properties

| Name | Type      | Description |
| ---- | --------- | ----------- |
| ɵdir | `never`   |             |
| ɵfac | `() => T` |             |
