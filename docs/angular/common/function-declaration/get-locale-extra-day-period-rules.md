---
kind: FunctionDeclaration
name: getLocaleExtraDayPeriodRules
module: common
---

# getLocaleExtraDayPeriodRules

## description

Retrieves locale-specific rules used to determine which day period to use
when more than one period is defined for a locale.

There is a rule for each defined day period. The
first rule is applied to the first day period and so on.
Fall back to AM/PM when no rules are available.

A rule can specify a period as time range, or as a single time value.

This functionality is only available when you have loaded the full locale data.
See the ["I18n guide"](guide/i18n#i18n-pipes).

```ts
function getLocaleExtraDayPeriodRules(locale: string): (Time | [Time, Time])[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L540-L550)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The rules for the locale, a single time value or array of _from-time, to-time_,
or null if no periods are available.

## see

`getLocaleExtraDayPeriods()`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
