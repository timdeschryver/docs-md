---
kind: InterfaceDeclaration
name: TagDefinition
module: compiler
---

# TagDefinition

```ts
interface TagDefinition {
  closedByParent: boolean;
  implicitNamespacePrefix: string | null;
  contentType: TagContentType;
  isVoid: boolean;
  ignoreFirstLf: boolean;
  canSelfClose: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ml_parser/tags.ts#L15-L24)

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| closedByParent          | `boolean`        |             |
| implicitNamespacePrefix | `string`         |             |
| contentType             | `TagContentType` |             |
| isVoid                  | `boolean`        |             |
| ignoreFirstLf           | `boolean`        |             |
| canSelfClose            | `boolean`        |             |
