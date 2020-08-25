---
kind: EnumDeclaration
name: MissingTranslationStrategy
module: core
---

# MissingTranslationStrategy

## description

Use this enum at bootstrap as an option of `bootstrapModule` to define the strategy
that the compiler should use in case of missing translations:

- Error: throw if you have missing translations.
- Warning (default): show a warning in the console and/or shell.
- Ignore: do nothing.

See the [i18n guide](guide/i18n#missing-translation) for more information.

```ts
export enum MissingTranslationStrategy {
  Error = 0,
  Warning = 1,
  Ignore = 2,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/i18n/tokens.ts#L147-L151)

## usageNotes

### Example

```typescript
import { MissingTranslationStrategy } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule, {
  missingTranslation: MissingTranslationStrategy.Error,
});
```

## publicApi
