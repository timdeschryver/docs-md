---
kind: FunctionDeclaration
name: formatNumber
module: common
---

# formatNumber

## description

Formats a number as text, with group sizing, separator, and other
parameters based on the locale.

```ts
function formatNumber(
  value: number,
  locale: string,
  digitsInfo?: string
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/format_number.ts#L217-L222)

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

The formatted text string.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
