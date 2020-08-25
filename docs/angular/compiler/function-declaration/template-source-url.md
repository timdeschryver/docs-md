---
kind: FunctionDeclaration
name: templateSourceUrl
module: compiler
---

# templateSourceUrl

```ts
function templateSourceUrl(
  ngModuleType: CompileIdentifierMetadata,
  compMeta: { type: CompileIdentifierMetadata },
  templateMeta: { isInline: boolean; templateUrl: string | null }
);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L763-L779)

## Parameters

| Name         | Type                                      | Description |
| ------------ | ----------------------------------------- | ----------- |
| ngModuleType | `CompileIdentifierMetadata`               |             |
| compMeta     | `{ type: CompileIdentifierMetadata; }`    |             |
| templateMeta | `{ isInline: boolean; templateUrl: string | null; }`    |  |
