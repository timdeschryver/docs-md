---
kind: InterfaceDeclaration
name: HostBinding
module: core
---

# HostBinding

## description

Type of the HostBinding metadata.

```ts
interface HostBinding {
  hostPropertyName?: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L803-L808)

## publicApi

## Properties

| Name             | Type     | Description                                        |
| ---------------- | -------- | -------------------------------------------------- |
| hostPropertyName | `string` | The DOM property that is bound to a data property. |
