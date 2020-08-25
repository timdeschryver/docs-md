---
kind: FunctionDeclaration
name: formatCurrency
module: common
---

# formatCurrency

## description

Formats a number as currency using locale rules.

```ts
function formatCurrency(
  value: number,
  locale: string,
  currency: string,
  currencyCode?: string,
  digitsInfo?: string
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/format_number.ts#L150-L170)

## ngModule

CommonModule

## Parameters

| Name         | Type     | Description                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------ |
| value        | `number` | The number to format.                                                          |
| locale       | `string` | A locale code for the locale format rules to use.                              |
| currency     | `string` | A string containing the currency symbol or its name,                           |
| currencyCode | `string` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)                         |
| digitInfo    | ``       | Decimal representation options, specified by a string in the following format: |
| digitsInfo   | `string` |                                                                                |

## returns

The formatted currency value.

## see

`formatNumber()`
`DecimalPipe`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
