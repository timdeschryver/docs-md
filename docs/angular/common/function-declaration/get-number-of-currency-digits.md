---
kind: FunctionDeclaration
name: getNumberOfCurrencyDigits
module: common
---

# getNumberOfCurrencyDigits

## description

Reports the number of decimal digits for a given currency.
The value depends upon the presence of cents in that particular currency.

```ts
function getNumberOfCurrencyDigits(code: string): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L674-L681)

## Parameters

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| code | `string` | The currency code. |

## returns

The number of decimal digits, typically 0 or 2.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
