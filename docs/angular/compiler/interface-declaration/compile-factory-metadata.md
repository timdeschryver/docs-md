---
kind: InterfaceDeclaration
name: CompileFactoryMetadata
module: compiler
---

# CompileFactoryMetadata

```ts
interface CompileFactoryMetadata {
  diDeps: CompileDiDependencyMetadata[];
  reference: any;

  // inherited from CompileIdentifierMetadata
  reference: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L121-L124)

## Properties

| Name      | Type                            | Description |
| --------- | ------------------------------- | ----------- |
| diDeps    | `CompileDiDependencyMetadata[]` |             |
| reference | `any`                           |             |
