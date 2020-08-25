---
kind: EnumDeclaration
name: TranslationWidth
module: common
---

# TranslationWidth

## description

String widths available for translations.
The specific character widths are locale-specific.
Examples are given for the word "Sunday" in English.

```ts
export enum TranslationWidth {
  /** 1 character for `en-US`. For example: 'S' */
  Narrow,
  /** 3 characters for `en-US`. For example: 'Sun' */
  Abbreviated,
  /** Full length for `en-US`. For example: "Sunday" */
  Wide,
  /** 2 characters for `en-US`, For example: "Su" */
  Short,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L67-L76)

## publicApi
