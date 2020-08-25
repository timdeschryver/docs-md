---
kind: InterfaceDeclaration
name: NgAnalyzedModules
module: compiler
---

# NgAnalyzedModules

```ts
interface NgAnalyzedModules {
  ngModules: CompileNgModuleMetadata[];
  ngModuleByPipeOrDirective: Map<StaticSymbol, CompileNgModuleMetadata>;
  files: NgAnalyzedFile[];
  symbolsMissingModule?: StaticSymbol[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L792-L797)

## Properties

| Name                      | Type                        | Description |
| ------------------------- | --------------------------- | ----------- |
| ngModules                 | `CompileNgModuleMetadata[]` |             |
| ngModuleByPipeOrDirective | `any`                       |             |
| files                     | `NgAnalyzedFile[]`          |             |
| symbolsMissingModule      | `StaticSymbol[]`            |             |
