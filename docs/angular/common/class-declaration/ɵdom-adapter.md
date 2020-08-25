---
kind: ClassDeclaration
name: ɵDomAdapter
module: common
---

# ɵDomAdapter

## description

Provides DOM operations in an environment-agnostic way.

```ts
class DomAdapter {
  abstract getProperty(el: Element, name: string): any;
  abstract dispatchEvent(el: any, evt: any): any;
  abstract log(error: any): any;
  abstract logGroup(error: any): any;
  abstract logGroupEnd(): any;
  abstract remove(el: any): Node;
  abstract createElement(tagName: any, doc?: any): HTMLElement;
  abstract createHtmlDocument(): HTMLDocument;
  abstract getDefaultDocument(): Document;
  abstract isElementNode(node: any): boolean;
  abstract isShadowRoot(node: any): boolean;
  abstract onAndCancel(el: any, evt: any, listener: any): Function;
  abstract supportsDOMEvents(): boolean;
  abstract getGlobalEventTarget(doc: Document, target: string): any;
  abstract getHistory(): History;
  abstract getLocation(): any;
  abstract getBaseHref(doc: Document): string | null;
  abstract resetBaseElement(): void;
  abstract getUserAgent(): string;
  abstract performanceNow(): number;
  abstract supportsCookies(): boolean;
  abstract getCookie(name: string): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L32-L77)

## security

Tread carefully! Interacting with the DOM directly is dangerous and
can introduce XSS risks.

## Methods

### getProperty

```ts
abstract getProperty(el: Element, name: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L34-L34)

#### Parameters (#getProperty-parameters)

| Name | Type      | Description |
| ---- | --------- | ----------- |
| el   | `Element` |             |
| name | `string`  |             |

### dispatchEvent

```ts
abstract dispatchEvent(el: any, evt: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L35-L35)

#### Parameters (#dispatchEvent-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| el   | `any` |             |
| evt  | `any` |             |

### log

```ts
abstract log(error: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L38-L38)

#### Parameters (#log-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| error | `any` |             |

### logGroup

```ts
abstract logGroup(error: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L39-L39)

#### Parameters (#logGroup-parameters)

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| error | `any` |             |

### logGroupEnd

```ts
abstract logGroupEnd(): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L40-L40)

### remove

```ts
abstract remove(el: any): Node;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L43-L43)

#### Parameters (#remove-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| el   | `any` |             |

### createElement

```ts
abstract createElement(tagName: any, doc?: any): HTMLElement;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L44-L44)

#### Parameters (#createElement-parameters)

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| tagName | `any` |             |
| doc     | `any` |             |

### createHtmlDocument

```ts
abstract createHtmlDocument(): HTMLDocument;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L45-L45)

### getDefaultDocument

```ts
abstract getDefaultDocument(): Document;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L46-L46)

### isElementNode

```ts
abstract isElementNode(node: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L49-L49)

#### Parameters (#isElementNode-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| node | `any` |             |

### isShadowRoot

```ts
abstract isShadowRoot(node: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L52-L52)

#### Parameters (#isShadowRoot-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| node | `any` |             |

### onAndCancel

```ts
abstract onAndCancel(el: any, evt: any, listener: any): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L55-L55)

#### Parameters (#onAndCancel-parameters)

| Name     | Type  | Description |
| -------- | ----- | ----------- |
| el       | `any` |             |
| evt      | `any` |             |
| listener | `any` |             |

### supportsDOMEvents

```ts
abstract supportsDOMEvents(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L56-L56)

### getGlobalEventTarget

```ts
abstract getGlobalEventTarget(doc: Document, target: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L59-L59)

#### Parameters (#getGlobalEventTarget-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| doc    | `Document` |             |
| target | `string`   |             |

### getHistory

```ts
abstract getHistory(): History;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L62-L62)

### getLocation

```ts
abstract getLocation():   any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L63-L64)

### getBaseHref

```ts
abstract getBaseHref(doc: Document): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L65-L65)

#### Parameters (#getBaseHref-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| doc  | `Document` |             |

### resetBaseElement

```ts
abstract resetBaseElement(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L66-L66)

### getUserAgent

```ts
abstract getUserAgent(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L69-L69)

### performanceNow

```ts
abstract performanceNow(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L72-L72)

### supportsCookies

```ts
abstract supportsCookies(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L75-L75)

### getCookie

```ts
abstract getCookie(name: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/dom_adapter.ts#L76-L76)

#### Parameters (#getCookie-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |
