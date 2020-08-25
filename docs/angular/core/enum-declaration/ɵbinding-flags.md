---
kind: EnumDeclaration
name: ɵBindingFlags
module: core
---

# ɵBindingFlags

```ts
export const enum BindingFlags {
  TypeElementAttribute = 1 << 0,
  TypeElementClass = 1 << 1,
  TypeElementStyle = 1 << 2,
  TypeProperty = 1 << 3,
  SyntheticProperty = 1 << 4,
  SyntheticHostProperty = 1 << 5,
  CatSyntheticProperty = SyntheticProperty | SyntheticHostProperty,

  // mutually exclusive values...
  Types = TypeElementAttribute |
    TypeElementClass |
    TypeElementStyle |
    TypeProperty,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/types.ts#L226-L237)
