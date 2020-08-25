---
kind: FunctionDeclaration
name: analyzeFile
module: compiler
---

# analyzeFile

```ts
function analyzeFile(
  host: NgAnalyzeModulesHost,
  staticSymbolResolver: StaticSymbolResolver,
  metadataResolver: CompileMetadataResolver,
  fileName: string
): NgAnalyzedFile;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L868-L940)

## Parameters

| Name                 | Type                      | Description |
| -------------------- | ------------------------- | ----------- |
| host                 | `NgAnalyzeModulesHost`    |             |
| staticSymbolResolver | `StaticSymbolResolver`    |             |
| metadataResolver     | `CompileMetadataResolver` |             |
| fileName             | `string`                  |             |
