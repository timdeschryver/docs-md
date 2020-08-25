---
kind: FunctionDeclaration
name: ɵregisterLocaleData
module: core
---

# ɵregisterLocaleData

## description

Register locale data to be used internally by Angular. See the
["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.

The signature `registerLocaleData(data: any, extraData?: any)` is deprecated since v5.1

```ts
function registerLocaleData(
  data: any,
  localeId?: string | any,
  extraData?: any
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/i18n/locale_data_api.ts#L23-L36)

## Parameters

| Name      | Type  | Description |
| --------- | ----- | ----------- |
| data      | `any` |             |
| localeId  | `any` |             |
| extraData | `any` |             |
