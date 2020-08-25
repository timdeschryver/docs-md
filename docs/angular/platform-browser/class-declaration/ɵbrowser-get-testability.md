---
kind: ClassDeclaration
name: ɵBrowserGetTestability
module: platform-browser
---

# ɵBrowserGetTestability

```ts
class BrowserGetTestability implements GetTestability {
  static init();
  addToWindow(registry: TestabilityRegistry): void;
  findTestabilityInTree(
    registry: TestabilityRegistry,
    elem: any,
    findInAncestors: boolean
  ): Testability | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/testability.ts#L12-L68)

## Methods

### init

```ts
static init();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/testability.ts#L13-L15)

### addToWindow

```ts
addToWindow(registry: TestabilityRegistry): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/testability.ts#L17-L50)

#### Parameters (#addToWindow-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| registry | `any` |             |

### findTestabilityInTree

```ts
findTestabilityInTree(registry: TestabilityRegistry, elem: any, findInAncestors: boolean):   Testability|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/testability.ts#L52-L67)

#### Parameters (#findTestabilityInTree-parameters)

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| registry        | `any`     |             |
| elem            | `any`     |             |
| findInAncestors | `boolean` |             |
