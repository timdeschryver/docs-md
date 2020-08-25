---
kind: FunctionDeclaration
name: formatPercent
module: common
---

# formatPercent

## description

Formats a number as a percentage according to locale rules.

```ts
function formatPercent(
  value: number,
  locale: string,
  digitsInfo?: string
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/format_number.ts#L191-L198)

## ngModule

CommonModule

## Parameters

| Name       | Type     | Description                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| value      | `number` | The number to format.                                                          |
| locale     | `string` | A locale code for the locale format rules to use.                              |
| digitInfo  | ``       | Decimal representation options, specified by a string in the following format: |
| digitsInfo | `string` |                                                                                |

## returns

The formatted percentage value.

## see

`formatNumber()`
`DecimalPipe`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
