---
kind: ClassDeclaration
name: SelectorMatcher
module: compiler
---

# SelectorMatcher

## description

Reads a list of CssSelectors and allows to calculate which ones
are contained in a given CssSelector.

```ts
class SelectorMatcher<T = any> {
  static createNotMatcher(notSelectors: CssSelector[]): SelectorMatcher<null>;
  addSelectables(cssSelectors: CssSelector[], callbackCtxt?: T);
  match(
    cssSelector: CssSelector,
    matchedCallback: ((c: CssSelector, a: T) => void) | null
  ): boolean;
  _matchTerminal(
    map: Map<string, SelectorContext<T>[]>,
    name: string,
    cssSelector: CssSelector,
    matchedCallback: ((c: CssSelector, a: any) => void) | null
  ): boolean;
  _matchPartial(
    map: Map<string, SelectorMatcher<T>>,
    name: string,
    cssSelector: CssSelector,
    matchedCallback: ((c: CssSelector, a: any) => void) | null
  ): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L182-L385)

## Methods

### createNotMatcher

```ts
static createNotMatcher(notSelectors: CssSelector[]): SelectorMatcher<null>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L183-L187)

#### Parameters (#createNotMatcher-parameters)

| Name         | Type            | Description |
| ------------ | --------------- | ----------- |
| notSelectors | `CssSelector[]` |             |

### addSelectables

```ts
addSelectables(cssSelectors: CssSelector[], callbackCtxt?: T);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L197-L206)

#### Parameters (#addSelectables-parameters)

| Name         | Type            | Description |
| ------------ | --------------- | ----------- |
| cssSelectors | `CssSelector[]` |             |
| callbackCtxt | `T`             |             |

### match

#### description (#match-description)

Find the objects that have been added via `addSelectable`
whose css selector is contained in the given css selector.

```ts
match(cssSelector: CssSelector, matchedCallback: ((c: CssSelector, a: T) => void)|null): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L294-L341)

#### Parameters (#match-parameters)

| Name            | Type                             | Description                                                              |
| --------------- | -------------------------------- | ------------------------------------------------------------------------ |
| cssSelector     | `CssSelector`                    | A css selector                                                           |
| matchedCallback | `(c: CssSelector, a: T) => void` | This callback will be called with the object handed into `addSelectable` |

#### return (#match-return)

boolean true if a match was found

### \_matchTerminal

```ts
_matchTerminal(   map: Map<string, SelectorContext<T>[]>, name: string, cssSelector: CssSelector,   matchedCallback: ((c: CssSelector, a: any) => void)|null): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L344-L366)

#### Parameters (#\_matchTerminal-parameters)

| Name            | Type                               | Description |
| --------------- | ---------------------------------- | ----------- |
| map             | `any`                              |             |
| name            | `string`                           |             |
| cssSelector     | `CssSelector`                      |             |
| matchedCallback | `(c: CssSelector, a: any) => void` |             |

### \_matchPartial

```ts
_matchPartial(   map: Map<string, SelectorMatcher<T>>, name: string, cssSelector: CssSelector,   matchedCallback: ((c: CssSelector, a: any) => void)|null): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L369-L384)

#### Parameters (#\_matchPartial-parameters)

| Name            | Type                               | Description |
| --------------- | ---------------------------------- | ----------- |
| map             | `any`                              |             |
| name            | `string`                           |             |
| cssSelector     | `CssSelector`                      |             |
| matchedCallback | `(c: CssSelector, a: any) => void` |             |
