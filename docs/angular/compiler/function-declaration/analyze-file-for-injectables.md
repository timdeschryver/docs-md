---
kind: FunctionDeclaration
name: analyzeFileForInjectables
module: compiler
---

# analyzeFileForInjectables

```ts
function analyzeFileForInjectables(
  host: NgAnalyzeModulesHost,
  staticSymbolResolver: StaticSymbolResolver,
  metadataResolver: CompileMetadataResolver,
  fileName: string
): NgAnalyzedFileWithInjectables;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L942-L970)

## Parameters

| Name                 | Type                      | Description |
| -------------------- | ------------------------- | ----------- |
| host                 | `NgAnalyzeModulesHost`    |             |
| staticSymbolResolver | `StaticSymbolResolver`    |             |
| metadataResolver     | `CompileMetadataResolver` |             |
| fileName             | `string`                  |             |
