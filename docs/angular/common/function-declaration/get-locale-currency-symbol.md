---
kind: FunctionDeclaration
name: getLocaleCurrencySymbol
module: common
---

# getLocaleCurrencySymbol

## description

Retrieves the symbol used to represent the currency for the main country
corresponding to a given locale. For example, '\$' for `en-US`.

```ts
function getLocaleCurrencySymbol(locale: string): string | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L458-L461)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The localized symbol character,
or `null` if the main country cannot be determined.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
