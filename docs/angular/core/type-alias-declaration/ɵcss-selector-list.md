---
kind: TypeAliasDeclaration
name: ɵCssSelectorList
module: core
---

# ɵCssSelectorList

## description

A list of CssSelectors.

A directive or component can have multiple selectors. This type is used for
directive defs so any of the selectors in the list will match that directive.

Original: 'form, [ngForm]'
Parsed: [['form'], ['', 'ngForm', '']]

```ts
export type CssSelectorList = CssSelector[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/projection.ts#L51-L51)
