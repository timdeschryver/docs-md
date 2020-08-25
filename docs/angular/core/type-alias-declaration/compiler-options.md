---
kind: TypeAliasDeclaration
name: CompilerOptions
module: core
---

# CompilerOptions

## description

Options for creating a compiler

```ts
export type CompilerOptions = {
  useJit?: boolean;
  defaultEncapsulation?: ViewEncapsulation;
  providers?: StaticProvider[];
  missingTranslation?: MissingTranslationStrategy;
  preserveWhitespaces?: boolean;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L146-L152)

## publicApi
