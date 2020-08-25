---
kind: FunctionDeclaration
name: registerLocaleData
module: common
---

# registerLocaleData

## description

Register global data to be used internally by Angular. See the
["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.

The signature registerLocaleData(data: any, extraData?: any) is deprecated since v5.1

```ts
function registerLocaleData(
  data: any,
  localeId?: string | any,
  extraData?: any
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data.ts#L19-L21)

## publicApi

## Parameters

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| data      | `any` |             |
| localeId  | `any` |             |
| extraData | `any` |             |
