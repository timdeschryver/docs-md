---
kind: InterfaceDeclaration
name: CompileNgModuleSummary
module: compiler
---

# CompileNgModuleSummary

```ts
interface CompileNgModuleSummary {
  type: CompileTypeMetadata;
  exportedDirectives: CompileIdentifierMetadata[];
  exportedPipes: CompileIdentifierMetadata[];
  entryComponents: CompileEntryComponentMetadata[];
  providers: {
    provider: CompileProviderMetadata;
    module: CompileIdentifierMetadata;
  }[];
  modules: CompileTypeMetadata[];

  // inherited from CompileTypeSummary
  summaryKind: CompileSummaryKind | null;
  type: CompileTypeMetadata;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L557-L571)

## Properties

| Name               | Type                                                                          | Description |
| ------------------ | ----------------------------------------------------------------------------- | ----------- |
| type               | `CompileTypeMetadata`                                                         |             |
| exportedDirectives | `CompileIdentifierMetadata[]`                                                 |             |
| exportedPipes      | `CompileIdentifierMetadata[]`                                                 |             |
| entryComponents    | `CompileEntryComponentMetadata[]`                                             |             |
| providers          | `{ provider: CompileProviderMetadata; module: CompileIdentifierMetadata; }[]` |             |
| modules            | `CompileTypeMetadata[]`                                                       |             |
