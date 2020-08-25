---
kind: FunctionDeclaration
name: getLocaleNumberFormat
module: common
---

# getLocaleNumberFormat

## description

Retrieves a number format for a given locale.

Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
when used to format the number 12345.678 could result in "12'345,678". That would happen if the
grouping separator for your language is an apostrophe, and the decimal separator is a comma.

<b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders
that stand for the decimal separator, and so on, and are NOT real characters.
You must NOT "translate" the placeholders. For example, don't change `.` to `,` even though in
your language the decimal point is written with a comma. The symbols should be replaced by the
local equivalents, using the appropriate `NumberSymbol` for your language.

Here are the special characters used in number patterns:

| Symbol | Meaning                                                                            |
| ------ | ---------------------------------------------------------------------------------- |
| .      | Replaced automatically by the character used for the decimal point.                |
| ,      | Replaced by the "grouping" (thousands) separator.                                  |
| 0      | Replaced by a digit (or zero if there aren't enough digits).                       |
| #      | Replaced by a digit (or nothing if there aren't enough).                           |
| ¤      | Replaced by a currency symbol, such as \$ or USD.                                  |
| %      | Marks a percent format. The % symbol may change position, but must be retained.    |
| E      | Marks a scientific format. The E symbol may change position, but must be retained. |
| '      | Special characters used as literal characters are quoted with ASCII single quotes. |

```ts
function getLocaleNumberFormat(locale: string, type: NumberFormatStyle): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L442-L445)

## Parameters

| Name   | Type                | Description                                                                  |
| ------ | ------------------- | ---------------------------------------------------------------------------- |
| locale | `string`            | A locale code for the locale format rules to use.                            |
| type   | `NumberFormatStyle` | The type of numeric value to be formatted (such as `Decimal` or `Currency`.) |

## returns

The localized format string.

## see

`NumberFormatStyle`
[CLDR website](http://cldr.unicode.org/translation/number-patterns)
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
