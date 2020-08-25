---
kind: FunctionDeclaration
name: getLocaleDayNames
module: common
---

# getLocaleDayNames

## description

Retrieves days of the week for the given locale, using the Gregorian calendar.

```ts
function getLocaleDayNames(
  locale: string,
  formStyle: FormStyle,
  width: TranslationWidth
): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L257-L264)

## Parameters

| Name      | Type               | Description                                       |
| --------- | ------------------ | ------------------------------------------------- |
| locale    | `string`           | A locale code for the locale format rules to use. |
| formStyle | `FormStyle`        | The required grammatical form.                    |
| width     | `TranslationWidth` | The required character width.                     |

## returns

An array of localized name strings.
For example,`[Sunday, Monday, ... Saturday]` for `en-US`.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
