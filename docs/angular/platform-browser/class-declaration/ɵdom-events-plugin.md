---
kind: ClassDeclaration
name: ɵDomEventsPlugin
module: platform-browser
---

# ɵDomEventsPlugin

```ts
class DomEventsPlugin extends EventManagerPlugin {
  supports(eventName: string): boolean;
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
  removeEventListener(target: any, eventName: string, callback: Function): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/dom_events.ts#L14-L34)

## Methods

### supports

```ts
supports(eventName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/dom_events.ts#L22-L24)

#### Parameters (#supports-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| eventName | `string` |             |

### addEventListener

```ts
addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/dom_events.ts#L26-L29)

#### Parameters (#addEventListener-parameters)

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| element   | `HTMLElement` |             |
| eventName | `string`      |             |
| handler   | `Function`    |             |

### removeEventListener

```ts
removeEventListener(target: any, eventName: string, callback: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/dom_events.ts#L31-L33)

#### Parameters (#removeEventListener-parameters)

| Name      | Type       | Description |
| --------- | ---------- | ----------- |
| target    | `any`      |             |
| eventName | `string`   |             |
| callback  | `Function` |             |
