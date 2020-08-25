---
kind: InterfaceDeclaration
name: Input
module: core
---

# Input

## description

Type of metadata for an `Input` property.

```ts
interface Input {
  bindingPropertyName?: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L698-L703)

## publicApi

## Properties

| Name                | Type     | Description                                                        |
| ------------------- | -------- | ------------------------------------------------------------------ |
| bindingPropertyName | `string` | The name of the DOM property to which the input property is bound. |
