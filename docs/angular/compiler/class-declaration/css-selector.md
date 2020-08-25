---
kind: ClassDeclaration
name: CssSelector
module: compiler
---

# CssSelector

## description

A css selector contains an element name,
css classes and attribute/value pairs with the purpose
of selecting subsets out of them.

```ts
class CssSelector {
  element: string | null = null;
  classNames: string[] = [];
  attrs: string[] = [];
  notSelectors: CssSelector[] = [];

  static parse(selector: string): CssSelector[];
  isElementSelector(): boolean;
  hasElementSelector(): boolean;
  setElement(element: string | null = null);
  getMatchingElementTemplate(): string;
  getAttrs(): string[];
  addAttribute(name: string, value: string = "");
  addClassName(name: string);
  toString(): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L42-L176)

## Properties

| Name       | Type       | Description                               |
| ---------- | ---------- | ----------------------------------------- |
| element    | `string`   |                                           |
| classNames | `string[]` |                                           |
| attrs      | `string[]` | The selectors are encoded in pairs where: |

- even locations are attribute names
- odd locations are attribute values.

Example:
Selector: `[key1=value1][key2]` would parse to:

````
['key1', 'value1', 'key2', '']
``` |
| notSelectors | `CssSelector[]` |  |
## Methods
### parse
```ts
static parse(selector: string): CssSelector[];
````

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L59-L114)

#### Parameters (#parse-parameters)

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| selector | `string` |             |

### isElementSelector

```ts
isElementSelector(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L116-L119)

### hasElementSelector

```ts
hasElementSelector(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L121-L123)

### setElement

```ts
setElement(element: string|null = null);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L125-L127)

#### Parameters (#setElement-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| element | `string` |             |

### getMatchingElementTemplate

```ts
getMatchingElementTemplate(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L130-L143)

### getAttrs

```ts
getAttrs(): string[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L145-L151)

### addAttribute

```ts
addAttribute(name: string, value: string = '');
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L153-L155)

#### Parameters (#addAttribute-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| name  | `string` |             |
| value | `string` |             |

### addClassName

```ts
addClassName(name: string);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L157-L159)

#### Parameters (#addClassName-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |

### toString

```ts
toString(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/selector.ts#L161-L175)
