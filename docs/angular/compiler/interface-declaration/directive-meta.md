---
kind: InterfaceDeclaration
name: DirectiveMeta
module: compiler
---

# DirectiveMeta

## description

Metadata regarding a directive that's needed to match it against template elements. This is
provided by a consumer of the t2 APIs.

```ts
interface DirectiveMeta {
  name: string;
  isComponent: boolean;
  inputs: { [property: string]: string | [string, string] };
  outputs: { [property: string]: string };
  exportAs: string[] | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_api.ts#L33-L64)

## Properties

| Name        | Type                          | Description                                       |
| ----------- | ----------------------------- | ------------------------------------------------- |
| name        | `string`                      | Name of the directive class (used for debugging). |
| isComponent | `boolean`                     | Whether the directive is a component.             |
| inputs      | `{ [property: string]: string | [string, string]; }`                              | Set of inputs which this directive claims. |

Goes from property names to field names. |
| outputs | `{ [property: string]: string; }` | Set of outputs which this directive claims.

Goes from property names to field names. |
| exportAs | `string[]` | Name under which the directive is exported, if any (exportAs in Angular).

Null otherwise |
