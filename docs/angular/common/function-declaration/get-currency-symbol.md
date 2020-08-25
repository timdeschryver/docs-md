---
kind: FunctionDeclaration
name: getCurrencySymbol
module: common
---

# getCurrencySymbol

## description

Retrieves the currency symbol for a given currency code.

For example, for the default `en-US` locale, the code `USD` can
be represented by the narrow symbol `$` or the wide symbol `US$`.

```ts
function getCurrencySymbol(
  code: string,
  format: "wide" | "narrow",
  locale = "en"
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L650-L659)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| code   | `string` | The currency code.                                |
| format | `"wide"  | "narrow"`                                         | The format, `wide` or `narrow`. |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The symbol, or the currency code if no symbol is available.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
