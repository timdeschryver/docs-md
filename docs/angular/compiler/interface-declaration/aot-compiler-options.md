---
kind: InterfaceDeclaration
name: AotCompilerOptions
module: compiler
---

# AotCompilerOptions

```ts
interface AotCompilerOptions {
  locale?: string;
  i18nFormat?: string;
  i18nUseExternalIds?: boolean;
  translations?: string;
  missingTranslation?: MissingTranslationStrategy;
  enableSummariesForJit?: boolean;
  preserveWhitespaces?: boolean;
  fullTemplateTypeCheck?: boolean;
  allowEmptyCodegenFiles?: boolean;
  strictInjectionParameters?: boolean;
  enableIvy?: boolean | "ngtsc";
  createExternalSymbolFactoryReexports?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler_options.ts#L11-L24)

## Properties

| Name                                 | Type                         | Description |
| ------------------------------------ | ---------------------------- | ----------- |
| locale                               | `string`                     |             |
| i18nFormat                           | `string`                     |             |
| i18nUseExternalIds                   | `boolean`                    |             |
| translations                         | `string`                     |             |
| missingTranslation                   | `MissingTranslationStrategy` |             |
| enableSummariesForJit                | `boolean`                    |             |
| preserveWhitespaces                  | `boolean`                    |             |
| fullTemplateTypeCheck                | `boolean`                    |             |
| allowEmptyCodegenFiles               | `boolean`                    |             |
| strictInjectionParameters            | `boolean`                    |             |
| enableIvy                            | `boolean                     | "ngtsc"`    |  |
| createExternalSymbolFactoryReexports | `boolean`                    |             |
