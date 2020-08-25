---
kind: EnumDeclaration
name: ɵDepFlags
module: core
---

# ɵDepFlags

## description

Bitmask for DI flags

```ts
export const enum DepFlags {
  None = 0,
  SkipSelf = 1 << 0,
  Optional = 1 << 1,
  Self = 1 << 2,
  Value = 1 << 3,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/view/types.ts#L310-L316)
