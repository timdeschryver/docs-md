---
kind: TypeAliasDeclaration
name: LanguageService
module: language-service
---

# LanguageService

## description

An instance of an Angular language service created by `createLanguageService()`.

The Angular language service implements a subset of methods defined in
The Angular language service implements a subset of methods defined by
the TypeScript language service.

```ts
export type LanguageService = Pick<
  ts.LanguageService,
  | "getCompletionsAtPosition"
  | "getDefinitionAndBoundSpan"
  | "getQuickInfoAtPosition"
  | "getSemanticDiagnostics"
  | "getReferencesAtPosition"
>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/types.ts#L254-L257)

## publicApi
