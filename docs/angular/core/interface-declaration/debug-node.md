---
kind: InterfaceDeclaration
name: DebugNode
module: core
---

# DebugNode

```ts
interface DebugNode {
  readonly listeners: DebugEventListener[];
  readonly parent: DebugElement | null;
  readonly nativeNode: any;
  readonly injector: Injector;
  readonly componentInstance: any;
  readonly context: any;
  readonly references: { [key: string]: any };
  readonly providerTokens: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/debug/debug_node.ts#L32-L41)

## publicApi

## Properties

| Name              | Type                      | Description |
| ----------------- | ------------------------- | ----------- |
| listeners         | `DebugEventListener[]`    |             |
| parent            | `DebugElement`            |             |
| nativeNode        | `any`                     |             |
| injector          | `Injector`                |             |
| componentInstance | `any`                     |             |
| context           | `any`                     |             |
| references        | `{ [key: string]: any; }` |             |
| providerTokens    | `any[]`                   |             |
