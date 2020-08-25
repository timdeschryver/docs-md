---
kind: FunctionDeclaration
name: getLocaleExtraDayPeriods
module: common
---

# getLocaleExtraDayPeriods

## description

Retrieves locale-specific day periods, which indicate roughly how a day is broken up
in different languages.
For example, for `en-US`, periods are morning, noon, afternoon, evening, and midnight.

This functionality is only available when you have loaded the full locale data.
See the ["I18n guide"](guide/i18n#i18n-pipes).

```ts
function getLocaleExtraDayPeriods(
  locale: string,
  formStyle: FormStyle,
  width: TranslationWidth
): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L569-L579)

## Parameters

| Name      | Type               | Description                                       |
| --------- | ------------------ | ------------------------------------------------- |
| locale    | `string`           | A locale code for the locale format rules to use. |
| formStyle | `FormStyle`        | The required grammatical form.                    |
| width     | `TranslationWidth` | The required character width.                     |

## returns

The translated day-period strings.

## see

`getLocaleExtraDayPeriodRules()`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
