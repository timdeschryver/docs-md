---
kind: FunctionDeclaration
name: getLocaleCurrencyName
module: common
---

# getLocaleCurrencyName

## description

Retrieves the name of the currency for the main country corresponding
to a given locale. For example, 'US Dollar' for `en-US`.

```ts
function getLocaleCurrencyName(locale: string): string | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L473-L476)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The currency name,
or `null` if the main country cannot be determined.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
