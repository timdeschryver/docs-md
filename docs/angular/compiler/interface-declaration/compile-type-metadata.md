---
kind: InterfaceDeclaration
name: CompileTypeMetadata
module: compiler
---

# CompileTypeMetadata

## description

Metadata regarding compilation of a type.

```ts
interface CompileTypeMetadata {
  diDeps: CompileDiDependencyMetadata[];
  lifecycleHooks: LifecycleHooks[];
  reference: any;

  // inherited from CompileIdentifierMetadata
  reference: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L159-L163)

## Properties

| Name           | Type                            | Description |
| -------------- | ------------------------------- | ----------- |
| diDeps         | `CompileDiDependencyMetadata[]` |             |
| lifecycleHooks | `LifecycleHooks[]`              |             |
| reference      | `any`                           |             |
