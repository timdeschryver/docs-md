---
kind: FunctionDeclaration
name: ɵgetLocalePluralCase
module: core
---

# ɵgetLocalePluralCase

## description

Retrieves the plural function used by ICU expressions to determine the plural case to use
for a given locale.

```ts
function getLocalePluralCase(locale: string): (value: number) => number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/i18n/locale_data_api.ts#L89-L92)

## Parameters

| Name   | Type     | Description                                       |
| ------ | -------- | ------------------------------------------------- |
| locale | `string` | A locale code for the locale format rules to use. |

## returns

The plural function for the locale.

## see

`NgPlural`
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)
