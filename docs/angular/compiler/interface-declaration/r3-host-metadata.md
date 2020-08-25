---
kind: InterfaceDeclaration
name: R3HostMetadata
module: compiler
---

# R3HostMetadata

## description

Mappings indicating how the class interacts with its
host element (host bindings, listeners, etc).

```ts
interface R3HostMetadata {
  attributes: { [key: string]: o.Expression };
  listeners: { [key: string]: string };
  properties: { [key: string]: string };
  specialAttributes: { styleAttr?: string; classAttr?: string };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/api.ts#L276-L293)

## Properties

| Name              | Type                                          | Description                                                 |
| ----------------- | --------------------------------------------- | ----------------------------------------------------------- |
| attributes        | `{ [key: string]: o.Expression; }`            | A mapping of attribute binding keys to `o.Expression`s.     |
| listeners         | `{ [key: string]: string; }`                  | A mapping of event binding keys to unparsed expressions.    |
| properties        | `{ [key: string]: string; }`                  | A mapping of property binding keys to unparsed expressions. |
| specialAttributes | `{ styleAttr?: string; classAttr?: string; }` |                                                             |
