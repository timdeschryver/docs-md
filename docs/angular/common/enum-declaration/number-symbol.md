---
kind: EnumDeclaration
name: NumberSymbol
module: common
---

# NumberSymbol

## description

Symbols that can be used to replace placeholders in number patterns.
Examples are based on `en-US` values.

```ts
export enum NumberSymbol {
  /**
   * Decimal separator.
   * For `en-US`, the dot character.
   * Example : 2,345`.`67
   */
  Decimal,
  /**
   * Grouping separator, typically for thousands.
   * For `en-US`, the comma character.
   * Example: 2`,`345.67
   */
  Group,
  /**
   * List-item separator.
   * Example: "one, two, and three"
   */
  List,
  /**
   * Sign for percentage (out of 100).
   * Example: 23.4%
   */
  PercentSign,
  /**
   * Sign for positive numbers.
   * Example: +23
   */
  PlusSign,
  /**
   * Sign for negative numbers.
   * Example: -23
   */
  MinusSign,
  /**
   * Computer notation for exponential value (n times a power of 10).
   * Example: 1.2E3
   */
  Exponential,
  /**
   * Human-readable format of exponential.
   * Example: 1.2x103
   */
  SuperscriptingExponent,
  /**
   * Sign for permille (out of 1000).
   * Example: 23.4‰
   */
  PerMille,
  /**
   * Infinity, can be used with plus and minus.
   * Example: ∞, +∞, -∞
   */
  Infinity,
  /**
   * Not a number.
   * Example: NaN
   */
  NaN,
  /**
   * Symbol used between time units.
   * Example: 10:52
   */
  TimeSeparator,
  /**
   * Decimal separator for currency values (fallback to `Decimal`).
   * Example: $2,345.67
   */
  CurrencyDecimal,
  /**
   * Group separator for currency values (fallback to `Group`).
   * Example: $2,345.67
   */
  CurrencyGroup,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L121-L194)

## see

`getLocaleNumberSymbol()`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
