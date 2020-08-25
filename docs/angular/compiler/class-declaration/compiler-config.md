---
kind: ClassDeclaration
name: CompilerConfig
module: compiler
---

# CompilerConfig

```ts
class CompilerConfig {
  public defaultEncapsulation: ViewEncapsulation | null;
  public useJit: boolean;
  public jitDevMode: boolean;
  public missingTranslation: MissingTranslationStrategy | null;
  public preserveWhitespaces: boolean;
  public strictInjectionParameters: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/config.ts#L12-L42)

## Properties

| Name                      | Type                         | Description |
| ------------------------- | ---------------------------- | ----------- |
| defaultEncapsulation      | `ViewEncapsulation`          |             |
| useJit                    | `boolean`                    |             |
| jitDevMode                | `boolean`                    |             |
| missingTranslation        | `MissingTranslationStrategy` |             |
| preserveWhitespaces       | `boolean`                    |             |
| strictInjectionParameters | `boolean`                    |             |
