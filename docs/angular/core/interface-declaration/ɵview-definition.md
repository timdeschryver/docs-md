---
kind: InterfaceDeclaration
name: ɵViewDefinition
module: core
---

# ɵViewDefinition

```ts
interface ViewDefinition {
  flags: ViewFlags;
  updateDirectives: ViewUpdateFn;
  updateRenderer: ViewUpdateFn;
  handleEvent: ViewHandleEventFn;
  nodes: NodeDef[];
  nodeFlags: NodeFlags;
  rootNodeFlags: NodeFlags;
  lastRenderRootNode: NodeDef | null;
  bindingCount: number;
  outputCount: number;
  nodeMatchedQueries: number;

  // inherited from Definition
  factory: DF | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/types.ts#L59-L81)

## Properties

| Name                                                | Type                | Description                                                      |
| --------------------------------------------------- | ------------------- | ---------------------------------------------------------------- |
| flags                                               | `ViewFlags`         |                                                                  |
| updateDirectives                                    | `ViewUpdateFn`      |                                                                  |
| updateRenderer                                      | `ViewUpdateFn`      |                                                                  |
| handleEvent                                         | `ViewHandleEventFn` |                                                                  |
| nodes                                               | `NodeDef[]`         | Order: Depth first.                                              |
| Especially providers are before elements / anchors. |
| nodeFlags                                           | `NodeFlags`         | aggregated NodeFlags for all nodes                               |
| rootNodeFlags                                       | `NodeFlags`         |                                                                  |
| lastRenderRootNode                                  | `NodeDef`           |                                                                  |
| bindingCount                                        | `number`            |                                                                  |
| outputCount                                         | `number`            |                                                                  |
| nodeMatchedQueries                                  | `number`            | Binary or of all query ids that are matched by one of the nodes. |

This includes query ids from templates as well.
Used as a bloom filter. |
