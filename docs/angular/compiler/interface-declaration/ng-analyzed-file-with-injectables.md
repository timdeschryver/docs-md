---
kind: InterfaceDeclaration
name: NgAnalyzedFileWithInjectables
module: compiler
---

# NgAnalyzedFileWithInjectables

```ts
interface NgAnalyzedFileWithInjectables {
  fileName: string;
  injectables: CompileInjectableMetadata[];
  shallowModules: CompileShallowModuleMetadata[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L799-L803)

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| fileName       | `string`                         |             |
| injectables    | `CompileInjectableMetadata[]`    |             |
| shallowModules | `CompileShallowModuleMetadata[]` |             |
