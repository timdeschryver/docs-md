---
kind: FunctionDeclaration
name: analyzeAndValidateNgModules
module: compiler
---

# analyzeAndValidateNgModules

```ts
function analyzeAndValidateNgModules(
  fileNames: string[],
  host: NgAnalyzeModulesHost,
  staticSymbolResolver: StaticSymbolResolver,
  metadataResolver: CompileMetadataResolver
): NgAnalyzedModules;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L827-L832)

## Parameters

| Name                 | Type                      | Description |
| -------------------- | ------------------------- | ----------- |
| fileNames            | `string[]`                |             |
| host                 | `NgAnalyzeModulesHost`    |             |
| staticSymbolResolver | `StaticSymbolResolver`    |             |
| metadataResolver     | `CompileMetadataResolver` |             |
