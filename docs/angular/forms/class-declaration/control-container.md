---
kind: ClassDeclaration
name: ControlContainer
module: forms
---

# ControlContainer

## description

A base class for directives that contain multiple registered instances of `NgControl`.
Only used by the forms module.

```ts
class ControlContainer extends AbstractControlDirective {
  name!: string | number | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/forms/src/directives/control_container.ts#L20-L43)

## publicApi

## Properties

| Name | Type    | Description |
| ---- | ------- | ----------- |
| name | `string | number`     |  |
