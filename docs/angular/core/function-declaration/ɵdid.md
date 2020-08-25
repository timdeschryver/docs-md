---
kind: FunctionDeclaration
name: ɵdid
module: core
---

# ɵdid

```ts
function directiveDef(
  checkIndex: number,
  flags: NodeFlags,
  matchedQueries: null | [string | number, QueryValueType][],
  childCount: number,
  ctor: any,
  deps: ([DepFlags, any] | any)[],
  props?: null | { [name: string]: [number, string] },
  outputs?: null | { [name: string]: string }
): NodeDef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/provider.ts#L30-L59)

## Parameters

| Name           | Type                                    | Description                |
| -------------- | --------------------------------------- | -------------------------- |
| checkIndex     | `number`                                |                            |
| flags          | `NodeFlags`                             |                            |
| matchedQueries | `[string                                | number, QueryValueType][]` |  |
| childCount     | `number`                                |                            |
| ctor           | `any`                                   |                            |
| deps           | `any[]`                                 |                            |
| props          | `{ [name: string]: [number, string]; }` |                            |
| outputs        | `{ [name: string]: string; }`           |                            |
