---
kind: ClassDeclaration
name: CompileNgModuleMetadata
module: compiler
---

# CompileNgModuleMetadata

## description

Metadata regarding compilation of a module.

```ts
class CompileNgModuleMetadata {
  type: CompileTypeMetadata;
  declaredDirectives: CompileIdentifierMetadata[];
  exportedDirectives: CompileIdentifierMetadata[];
  declaredPipes: CompileIdentifierMetadata[];
  exportedPipes: CompileIdentifierMetadata[];
  entryComponents: CompileEntryComponentMetadata[];
  bootstrapComponents: CompileIdentifierMetadata[];
  providers: CompileProviderMetadata[];
  importedModules: CompileNgModuleSummary[];
  exportedModules: CompileNgModuleSummary[];
  schemas: SchemaMetadata[];
  id: string | null;
  transitiveModule: TransitiveCompileNgModuleMetadata;

  toSummary(): CompileNgModuleSummary;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L585-L659)

## Properties

| Name                | Type                                | Description |
| ------------------- | ----------------------------------- | ----------- |
| type                | `CompileTypeMetadata`               |             |
| declaredDirectives  | `CompileIdentifierMetadata[]`       |             |
| exportedDirectives  | `CompileIdentifierMetadata[]`       |             |
| declaredPipes       | `CompileIdentifierMetadata[]`       |             |
| exportedPipes       | `CompileIdentifierMetadata[]`       |             |
| entryComponents     | `CompileEntryComponentMetadata[]`   |             |
| bootstrapComponents | `CompileIdentifierMetadata[]`       |             |
| providers           | `CompileProviderMetadata[]`         |             |
| importedModules     | `CompileNgModuleSummary[]`          |             |
| exportedModules     | `CompileNgModuleSummary[]`          |             |
| schemas             | `SchemaMetadata[]`                  |             |
| id                  | `string`                            |             |
| transitiveModule    | `TransitiveCompileNgModuleMetadata` |             |

## Methods

### toSummary

```ts
toSummary(): CompileNgModuleSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L647-L658)
