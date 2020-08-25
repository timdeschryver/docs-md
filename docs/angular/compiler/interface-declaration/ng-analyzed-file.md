---
kind: InterfaceDeclaration
name: NgAnalyzedFile
module: compiler
---

# NgAnalyzedFile

```ts
interface NgAnalyzedFile {
  fileName: string;
  directives: StaticSymbol[];
  abstractDirectives: StaticSymbol[];
  pipes: StaticSymbol[];
  ngModules: CompileNgModuleMetadata[];
  injectables: CompileInjectableMetadata[];
  exportsNonSourceFiles: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler.ts#L805-L813)

## Properties

| Name                  | Type                          | Description |
| --------------------- | ----------------------------- | ----------- |
| fileName              | `string`                      |             |
| directives            | `StaticSymbol[]`              |             |
| abstractDirectives    | `StaticSymbol[]`              |             |
| pipes                 | `StaticSymbol[]`              |             |
| ngModules             | `CompileNgModuleMetadata[]`   |             |
| injectables           | `CompileInjectableMetadata[]` |             |
| exportsNonSourceFiles | `boolean`                     |             |
