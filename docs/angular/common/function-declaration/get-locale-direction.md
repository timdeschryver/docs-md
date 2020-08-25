---
kind: FunctionDeclaration
name: getLocaleDirection
module: common
---

# getLocaleDirection

## description

Retrieves the writing direction of a specified locale

```ts
function getLocaleDirection(locale: string): "ltr" | "rtl";
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L588-L591)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## publicApi

## returns

'rtl' or 'ltr'

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)
