---
kind: FunctionDeclaration
name: getLocaleDateTimeFormat
module: common
---

# getLocaleDateTimeFormat

## description

Retrieves a localized date-time formatting string.

```ts
function getLocaleDateTimeFormat(locale: string, width: FormatWidth): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L378-L382)

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
