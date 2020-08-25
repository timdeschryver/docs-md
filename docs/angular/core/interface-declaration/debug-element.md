---
kind: InterfaceDeclaration
name: DebugElement
module: core
---

# DebugElement

```ts
interface DebugElement {
  readonly name: string;
  readonly properties: { [key: string]: any };
  readonly attributes: { [key: string]: string | null };
  readonly classes: { [key: string]: boolean };
  readonly styles: { [key: string]: string | null };
  readonly childNodes: DebugNode[];
  readonly nativeElement: any;
  readonly children: DebugElement[];

  // inherited from DebugNode
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/debug/debug_node.ts#L80-L94)

## publicApi

## Properties

| Name          | Type                          | Description |
| ------------- | ----------------------------- | ----------- |
| name          | `string`                      |             |
| properties    | `{ [key: string]: any; }`     |             |
| attributes    | `{ [key: string]: string; }`  |             |
| classes       | `{ [key: string]: boolean; }` |             |
| styles        | `{ [key: string]: string; }`  |             |
| childNodes    | `DebugNode[]`                 |             |
| nativeElement | `any`                         |             |
| children      | `DebugElement[]`              |             |
