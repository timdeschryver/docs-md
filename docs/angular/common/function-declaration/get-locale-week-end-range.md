---
kind: FunctionDeclaration
name: getLocaleWeekEndRange
module: common
---

# getLocaleWeekEndRange

## description

Range of week days that are considered the week-end for the given locale.

```ts
function getLocaleWeekEndRange(locale: string): [WeekDay, WeekDay];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L330-L333)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The range of day values, `[startDay, endDay]`.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
