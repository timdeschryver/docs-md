---
kind: FunctionDeclaration
name: ɵeld
module: core
---

# ɵeld

```ts
function elementDef(
  checkIndex: number,
  flags: NodeFlags,
  matchedQueriesDsl: null | [string | number, QueryValueType][],
  ngContentIndex: null | number,
  childCount: number,
  namespaceAndName: string | null,
  fixedAttrs: null | [string, string][] = [],
  bindings?: null | [BindingFlags, string, string | SecurityContext | null][],
  outputs?: null | [string, string][],
  handleEvent?: null | ElementHandleEventFn,
  componentView?: null | ViewDefinitionFactory,
  componentRendererType?: RendererType2 | null
): NodeDef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/element.ts#L64-L157)

## Parameters

| Name                  | Type                           | Description                |
| --------------------- | ------------------------------ | -------------------------- |
| checkIndex            | `number`                       |                            |
| flags                 | `NodeFlags`                    |                            |
| matchedQueriesDsl     | `[string                       | number, QueryValueType][]` |  |
| ngContentIndex        | `number`                       |                            |
| childCount            | `number`                       |                            |
| namespaceAndName      | `string`                       |                            |
| fixedAttrs            | `[string, string][]`           |                            |
| bindings              | `[BindingFlags, string, string | SecurityContext][]`        |  |
| outputs               | `[string, string][]`           |                            |
| handleEvent           | `ElementHandleEventFn`         |                            |
| componentView         | `ViewDefinitionFactory`        |                            |
| componentRendererType | `RendererType2`                |                            |
