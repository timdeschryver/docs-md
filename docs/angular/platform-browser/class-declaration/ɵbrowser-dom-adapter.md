---
kind: ClassDeclaration
name: ɵBrowserDomAdapter
module: platform-browser
---

# ɵBrowserDomAdapter

## description

A `DomAdapter` powered by full browser DOM APIs.

```ts
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent();
  getProperty(el: Node, name: string): any;
  log(error: string): void;
  logGroup(error: string): void;
  logGroupEnd(): void;
  onAndCancel(el: Node, evt: any, listener: any): Function;
  dispatchEvent(el: Node, evt: any);
  remove(node: Node): Node;
  getValue(el: any): string;
  createElement(tagName: string, doc?: Document): HTMLElement;
  createHtmlDocument(): HTMLDocument;
  getDefaultDocument(): Document;
  isElementNode(node: Node): boolean;
  isShadowRoot(node: any): boolean;
  getGlobalEventTarget(doc: Document, target: string): EventTarget | null;
  getHistory(): History;
  getLocation(): Location;
  getBaseHref(doc: Document): string | null;
  resetBaseElement(): void;
  getUserAgent(): string;
  performanceNow(): number;
  supportsCookies(): boolean;
  getCookie(name: string): string | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L31-L138)

## security

Tread carefully! Interacting with the DOM directly is dangerous and
can introduce XSS risks.

## Methods

### makeCurrent

```ts
static makeCurrent();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L32-L34)

### getProperty

```ts
getProperty(el: Node, name: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L35-L37)

#### Parameters (#getProperty-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| el   | `Node`   |             |
| name | `string` |             |

### log

```ts
log(error: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L39-L43)

#### Parameters (#log-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| error | `string` |             |

### logGroup

```ts
logGroup(error: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L45-L49)

#### Parameters (#logGroup-parameters)

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| error | `string` |             |

### logGroupEnd

```ts
logGroupEnd(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L51-L55)

### onAndCancel

```ts
onAndCancel(el: Node, evt: any, listener: any): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L57-L64)

#### Parameters (#onAndCancel-parameters)

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| el       | `Node` |             |
| evt      | `any`  |             |
| listener | `any`  |             |

### dispatchEvent

```ts
dispatchEvent(el: Node, evt: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L65-L67)

#### Parameters (#dispatchEvent-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| el   | `Node` |             |
| evt  | `any`  |             |

### remove

```ts
remove(node: Node): Node;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L68-L73)

#### Parameters (#remove-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| node | `Node` |             |

### getValue

```ts
getValue(el: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L74-L76)

#### Parameters (#getValue-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| el   | `any` |             |

### createElement

```ts
createElement(tagName: string, doc?: Document): HTMLElement;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L77-L80)

#### Parameters (#createElement-parameters)

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| tagName | `string`   |             |
| doc     | `Document` |             |

### createHtmlDocument

```ts
createHtmlDocument(): HTMLDocument;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L81-L83)

### getDefaultDocument

```ts
getDefaultDocument(): Document;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L84-L86)

### isElementNode

```ts
isElementNode(node: Node): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L88-L90)

#### Parameters (#isElementNode-parameters)

| Name | Type   | Description |
| ---- | ------ | ----------- |
| node | `Node` |             |

### isShadowRoot

```ts
isShadowRoot(node: any): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L92-L94)

#### Parameters (#isShadowRoot-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| node | `any` |             |

### getGlobalEventTarget

```ts
getGlobalEventTarget(doc: Document, target: string): EventTarget|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L96-L107)

#### Parameters (#getGlobalEventTarget-parameters)

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| doc    | `Document` |             |
| target | `string`   |             |

### getHistory

```ts
getHistory(): History;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L108-L110)

### getLocation

```ts
getLocation(): Location;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L111-L113)

### getBaseHref

```ts
getBaseHref(doc: Document): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L114-L117)

#### Parameters (#getBaseHref-parameters)

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| doc  | `Document` |             |

### resetBaseElement

```ts
resetBaseElement(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L118-L120)

### getUserAgent

```ts
getUserAgent(): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L121-L123)

### performanceNow

```ts
performanceNow(): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L124-L129)

### supportsCookies

```ts
supportsCookies(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L131-L133)

### getCookie

```ts
getCookie(name: string): string|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/browser_adapter.ts#L135-L137)

#### Parameters (#getCookie-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| name | `string` |             |
