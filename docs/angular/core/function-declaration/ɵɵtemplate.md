---
kind: FunctionDeclaration
name: ɵɵtemplate
module: core
---

# ɵɵtemplate

## description

Creates an LContainer for an ng-template (dynamically-inserted view), e.g.

<ng-template #foo>

<div></div>
</ng-template>

```ts
function ɵɵtemplate(
  index: number,
  templateFn: ComponentTemplate<any> | null,
  decls: number,
  vars: number,
  tagName?: string | null,
  attrsIndex?: number | null,
  localRefsIndex?: number | null,
  localRefExtractor?: LocalRefExtractor
);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/template.ts#L71-L98)

## Parameters

| Name              | Type                     | Description                                                    |
| ----------------- | ------------------------ | -------------------------------------------------------------- |
| index             | `number`                 | The index of the container in the data array                   |
| templateFn        | `ComponentTemplate<any>` | Inline template                                                |
| decls             | `number`                 | The number of nodes, local refs, and pipes for this template   |
| vars              | `number`                 | The number of bindings for this template                       |
| tagName           | `string`                 | The name of the container element, if applicable               |
| attrsIndex        | `number`                 | Index of template attributes in the `consts` array.            |
| localRefs         | ``                       | Index of the local references in the `consts` array.           |
| localRefExtractor | `LocalRefExtractor`      | A function which extracts local-refs values from the template. |
| localRefsIndex    | `number`                 |                                                                |

## codeGenApi
