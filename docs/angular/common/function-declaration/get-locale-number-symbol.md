---
kind: FunctionDeclaration
name: getLocaleNumberSymbol
module: common
---

# getLocaleNumberSymbol

## description

Retrieves a localized number symbol that can be used to replace placeholders in number formats.

```ts
function getLocaleNumberSymbol(locale: string, symbol: NumberSymbol): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L394-L405)

## Parameters

| Name   | Type           | Description             |
| ------ | -------------- | ----------------------- |
| locale | `string`       | The locale code.        |
| symbol | `NumberSymbol` | The symbol to localize. |

## returns

The character for the localized symbol.

## see

`NumberSymbol`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
