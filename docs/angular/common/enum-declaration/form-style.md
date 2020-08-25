---
kind: EnumDeclaration
name: FormStyle
module: common
---

# FormStyle

## description

Context-dependant translation forms for strings.
Typically the standalone version is for the nominative form of the word,
and the format version is used for the genitive case.

```ts
export enum FormStyle {
  Format,
  Standalone,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/i18n/locale_data_api.ts#L55-L58)

## see

[CLDR website](http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles)
[Internationalization (i18n) Guide](https://angular.io/guide/i18n)

## publicApi
