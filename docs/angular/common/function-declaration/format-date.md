---
kind: FunctionDeclaration
name: formatDate
module: common
---

# formatDate

## description

Formats a date according to locale rules.

```ts
function formatDate(
  value: string | number | Date,
  format: string,
  locale: string,
  timezone?: string
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/format_date.ts#L64-L102)

## ngModule

CommonModule

## Parameters

| Name     | Type     | Description                                                      |
| -------- | -------- | ---------------------------------------------------------------- |
| value    | `string  | number                                                           | Date` | The date to format, as a Date, or a number (milliseconds since UTC epoch) |
| format   | `string` | The date-time components to include. See `DatePipe` for details. |
| locale   | `string` | A locale code for the locale format rules to use.                |
| timezone | `string` | The time zone. A time zone offset from GMT (such as `'+0430'`),  |

## returns

The formatted date string.

## see

`DatePipe`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
