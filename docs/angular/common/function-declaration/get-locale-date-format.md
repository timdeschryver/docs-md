---
kind: FunctionDeclaration
name: getLocaleDateFormat
module: common
---

# getLocaleDateFormat

## description

Retrieves a localized date-value formating string.

```ts
function getLocaleDateFormat(locale: string, width: FormatWidth): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L346-L349)

## Parameters

| Name   | Type          | Description                                       |
| ------ | ------------- | ------------------------------------------------- |
| locale | `string`      | A locale code for the locale format rules to use. |
| width  | `FormatWidth` | The format type.                                  |

## returns

The localized formating string.

## see

`FormatWidth`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
