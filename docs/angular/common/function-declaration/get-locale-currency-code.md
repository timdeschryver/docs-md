---
kind: FunctionDeclaration
name: getLocaleCurrencyCode
module: common
---

# getLocaleCurrencyCode

## description

Retrieves the default currency code for the given locale.

The default is defined as the first currency which is still in use.

```ts
function getLocaleCurrencyCode(locale: string): string | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L488-L490)

## Parameters

| Name   | Type     | Description                                         |
| ------ | -------- | --------------------------------------------------- |
| locale | `string` | The code of the locale whose currency code we want. |

## returns

The code of the default currency for the given locale.

## publicApi
