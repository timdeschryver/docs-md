---
kind: FunctionDeclaration
name: ɵccf
module: core
---

# ɵccf

```ts
function createComponentFactory(
  selector: string,
  componentType: Type<any>,
  viewDefFactory: ViewDefinitionFactory,
  inputs: { [propName: string]: string } | null,
  outputs: { [propName: string]: string },
  ngContentSelectors: string[]
): ComponentFactory<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/refs.ts#L33-L39)

## Parameters

| Name               | Type                              | Description |
| ------------------ | --------------------------------- | ----------- |
| selector           | `string`                          |             |
| componentType      | `Type<any>`                       |             |
| viewDefFactory     | `ViewDefinitionFactory`           |             |
| inputs             | `{ [propName: string]: string; }` |             |
| outputs            | `{ [propName: string]: string; }` |             |
| ngContentSelectors | `string[]`                        |             |
