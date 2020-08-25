---
kind: ClassDeclaration
name: ɵHammerGesturesPlugin
module: platform-browser
---

# ɵHammerGesturesPlugin

## description

Event plugin that adds Hammer support to an application.

```ts
class HammerGesturesPlugin extends EventManagerPlugin {
  supports(eventName: string): boolean;
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
  isCustomEvent(eventName: string): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L162-L254)

## ngModule

HammerModule

## Methods

### supports

```ts
supports(eventName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L171-L184)

#### Parameters (#supports-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| eventName | `string` |             |

### addEventListener

```ts
addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L186-L249)

#### Parameters (#addEventListener-parameters)

| Name      | Type          | Description |
| --------- | ------------- | ----------- |
| element   | `HTMLElement` |             |
| eventName | `string`      |             |
| handler   | `Function`    |             |

### isCustomEvent

```ts
isCustomEvent(eventName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/hammer_gestures.ts#L251-L253)

#### Parameters (#isCustomEvent-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| eventName | `string` |             |
