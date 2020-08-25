---
kind: EnumDeclaration
name: ɵNodeFlags
module: core
---

# ɵNodeFlags

## description

Bitmask for NodeDef.flags.
Naming convention:

- `Type...`: flags that are mutually exclusive
- `Cat...`: union of multiple `Type...` (short for category).

```ts
export const enum NodeFlags {
  None = 0,
  TypeElement = 1 << 0,
  TypeText = 1 << 1,
  ProjectedTemplate = 1 << 2,
  CatRenderNode = TypeElement | TypeText,
  TypeNgContent = 1 << 3,
  TypePipe = 1 << 4,
  TypePureArray = 1 << 5,
  TypePureObject = 1 << 6,
  TypePurePipe = 1 << 7,
  CatPureExpression = TypePureArray | TypePureObject | TypePurePipe,
  TypeValueProvider = 1 << 8,
  TypeClassProvider = 1 << 9,
  TypeFactoryProvider = 1 << 10,
  TypeUseExistingProvider = 1 << 11,
  LazyProvider = 1 << 12,
  PrivateProvider = 1 << 13,
  TypeDirective = 1 << 14,
  Component = 1 << 15,
  CatProviderNoDirective = TypeValueProvider |
    TypeClassProvider |
    TypeFactoryProvider |
    TypeUseExistingProvider,
  CatProvider = CatProviderNoDirective | TypeDirective,
  OnInit = 1 << 16,
  OnDestroy = 1 << 17,
  DoCheck = 1 << 18,
  OnChanges = 1 << 19,
  AfterContentInit = 1 << 20,
  AfterContentChecked = 1 << 21,
  AfterViewInit = 1 << 22,
  AfterViewChecked = 1 << 23,
  EmbeddedViews = 1 << 24,
  ComponentView = 1 << 25,
  TypeContentQuery = 1 << 26,
  TypeViewQuery = 1 << 27,
  StaticQuery = 1 << 28,
  DynamicQuery = 1 << 29,
  TypeNgModule = 1 << 30,
  CatQuery = TypeContentQuery | TypeViewQuery,

  // mutually exclusive values...
  Types = CatRenderNode |
    TypeNgContent |
    TypePipe |
    CatPureExpression |
    CatProvider |
    CatQuery,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/types.ts#L173-L215)
