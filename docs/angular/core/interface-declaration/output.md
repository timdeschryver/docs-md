---
kind: InterfaceDeclaration
name: Output
module: core
---

# Output

## description

Type of the Output metadata.

```ts
interface Output {
  bindingPropertyName?: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L743-L748)

## publicApi

## Properties

| Name                | Type     | Description                                                         |
| ------------------- | -------- | ------------------------------------------------------------------- |
| bindingPropertyName | `string` | The name of the DOM property to which the output property is bound. |
