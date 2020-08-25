---
kind: FunctionDeclaration
name: getLocaleFirstDayOfWeek
module: common
---

# getLocaleFirstDayOfWeek

## description

Retrieves the first day of the week for the given locale.

```ts
function getLocaleFirstDayOfWeek(locale: string): WeekDay;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L316-L319)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

A day index number, using the 0-based week-day index for `en-US`
(Sunday = 0, Monday = 1, ...).
For example, for `fr-FR`, returns 1 to indicate that the first day is Monday.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
