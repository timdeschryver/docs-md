---
kind: ClassDeclaration
name: SelectorContext
module: compiler
---

# SelectorContext

```ts
class SelectorContext<T = any> {
  notSelectors: CssSelector[];

  finalize(
    cssSelector: CssSelector,
    callback: ((c: CssSelector, a: T) => void) | null
  ): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L395-L417)

## Properties

| Name         | Type            | Description |
| ------------ | --------------- | ----------- |
| notSelectors | `CssSelector[]` |             |

## Methods

### finalize

```ts
finalize(cssSelector: CssSelector, callback: ((c: CssSelector, a: T) => void)|null): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L403-L416)

#### Parameters (#finalize-parameters)

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| cssSelector | `CssSelector`                    |             |
| callback    | `(c: CssSelector, a: T) => void` |             |
