---
kind: FunctionDeclaration
name: getLocaleEraNames
module: common
---

# getLocaleEraNames

## description

Retrieves Gregorian-calendar eras for the given locale.

```ts
function getLocaleEraNames(
  locale: string,
  width: TranslationWidth
): [string, string];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L299-L303)

## Parameters

| Name      | Type               | Description                                       |
| --------- | ------------------ | ------------------------------------------------- |
| locale    | `string`           | A locale code for the locale format rules to use. |
| formStyle | ``                 | The required grammatical form.                    |
| width     | `TranslationWidth` | The required character width.                     |

## returns

An array of localized era strings.
For example, `[AD, BC]` for `en-US`.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
