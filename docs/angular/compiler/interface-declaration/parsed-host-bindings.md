---
kind: InterfaceDeclaration
name: ParsedHostBindings
module: compiler
---

# ParsedHostBindings

```ts
interface ParsedHostBindings {
  attributes: { [key: string]: o.Expression };
  listeners: { [key: string]: string };
  properties: { [key: string]: string };
  specialAttributes: { styleAttr?: string; classAttr?: string };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/compiler.ts#L814-L819)

## Properties

| Name              | Type                                          | Description |
| ----------------- | --------------------------------------------- | ----------- |
| attributes        | `{ [key: string]: o.Expression; }`            |             |
| listeners         | `{ [key: string]: string; }`                  |             |
| properties        | `{ [key: string]: string; }`                  |             |
| specialAttributes | `{ styleAttr?: string; classAttr?: string; }` |             |
