---
kind: FunctionDeclaration
name: getLocaleId
module: common
---

# getLocaleId

## description

Retrieves the locale ID from the currently loaded locale.
The loaded locale could be, for example, a global one rather than a regional one.

```ts
function getLocaleId(locale: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L220-L222)

## Parameters

| Name   | Type     | Description                     |
| ------ | -------- | ------------------------------- |
| locale | `string` | A locale code, such as `fr-FR`. |

## returns

The locale code. For example, `fr`.

## see

[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
