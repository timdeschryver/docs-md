---
kind: FunctionDeclaration
name: ɵsetLocaleId
module: core
---

# ɵsetLocaleId

## description

Sets the locale id that will be used for translations and ICU expressions.
This is the ivy version of `LOCALE_ID` that was defined as an injection token for the view engine
but is now defined as a global value.

```ts
function setLocaleId(localeId: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/i18n.ts#L1405-L1410)

## Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| localeId | `string` |             |
