---
kind: FunctionDeclaration
name: analyzeNgModules
module: compiler
---

# analyzeNgModules

```ts
function analyzeNgModules(
  fileNames: string[],
  host: NgAnalyzeModulesHost,
  staticSymbolResolver: StaticSymbolResolver,
  metadataResolver: CompileMetadataResolver
): NgAnalyzedModules;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L819-L825)

## Parameters

| Name                 | Type                      | Description |
| -------------------- | ------------------------- | ----------- |
| fileNames            | `string[]`                |             |
| host                 | `NgAnalyzeModulesHost`    |             |
| staticSymbolResolver | `StaticSymbolResolver`    |             |
| metadataResolver     | `CompileMetadataResolver` |             |
