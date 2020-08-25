---
kind: FunctionDeclaration
name: getLocaleDayPeriods
module: common
---

# getLocaleDayPeriods

## description

Retrieves day period strings for the given locale.

```ts
function getLocaleDayPeriods(
  locale: string,
  formStyle: FormStyle,
  width: TranslationWidth
): [string, string];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L235-L243)

## Parameters

| Name      | Type               | Description                                       |
| --------- | ------------------ | ------------------------------------------------- |
| locale    | `string`           | A locale code for the locale format rules to use. |
| formStyle | `FormStyle`        | The required grammatical form.                    |
| width     | `TranslationWidth` | The required character width.                     |

## returns

An array of localized period strings. For example, `[AM, PM]` for `en-US`.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
