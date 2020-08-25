---
kind: ClassDeclaration
name: By
module: platform-browser
---

# By

## description

Predicates for use with {@link DebugElement}'s query functions.

```ts
class By {
  static all(): Predicate<DebugNode>;
  static css(selector: string): Predicate<DebugElement>;
  static directive(type: Type<any>): Predicate<DebugNode>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/debug/by.ts#L19-L59)

## publicApi

## Methods

### all

#### description (#all-description)

Match all nodes.

```ts
static all(): Predicate<DebugNode>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/debug/by.ts#L28-L30)

#### usageNotes (#all-usage-notes)

### Example

{@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}

### css

#### description (#css-description)

Match elements by the given CSS selector.

```ts
static css(selector: string): Predicate<DebugElement>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/debug/by.ts#L40-L46)

#### usageNotes (#css-usage-notes)

### Example

{@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}

#### Parameters (#css-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| selector | `string` |             |

### directive

#### description (#directive-description)

Match nodes that have the given directive present.

```ts
static directive(type: Type<any>): Predicate<DebugNode>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/debug/by.ts#L56-L58)

#### usageNotes (#directive-usage-notes)

### Example

{@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}

#### Parameters (#directive-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| type | `any` |             |
