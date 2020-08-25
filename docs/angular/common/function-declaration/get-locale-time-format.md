---
kind: FunctionDeclaration
name: getLocaleTimeFormat
module: common
---

# getLocaleTimeFormat

## description

Retrieves a localized time-value formatting string.

```ts
function getLocaleTimeFormat(locale: string, width: FormatWidth): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L362-L365)

## Parameters

| Name   | Type          | Description                                       |
| ------ | ------------- | ------------------------------------------------- |
| locale | `string`      | A locale code for the locale format rules to use. |
| width  | `FormatWidth` | The format type.                                  |

## returns

The localized formatting string.

## see

`FormatWidth`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
