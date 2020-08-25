---
kind: ClassDeclaration
name: ɵKeyEventsPlugin
module: platform-browser
---

# ɵKeyEventsPlugin

```ts
class KeyEventsPlugin extends EventManagerPlugin {
  supports(eventName: string): boolean;
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
  static parseEventName(eventName: string): { [key: string]: string } | null;
  static getEventFullKey(event: KeyboardEvent): string;
  static eventCallback(fullKey: any, handler: Function, zone: NgZone): Function;
  static _normalizeKey(keyName: string): string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L76-L191)

## publicApi

A browser plug-in that provides support for handling of key events in Angular.

## Methods

### supports

#### description (#supports-description)

Reports whether a named key event is supported.

```ts
supports(eventName: string): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L91-L93)

#### Parameters (#supports-parameters)

| Name      | Type     | Description              |
| --------- | -------- | ------------------------ |
| eventName | `string` | The event name to query. |

#### return (#supports-return)

True if the named key event is supported.

### addEventListener

#### description (#addEventListener-description)

Registers a handler for a specific element and key event.

```ts
addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L103-L112)

#### Parameters (#addEventListener-parameters)

| Name      | Type          | Description                                                   |
| --------- | ------------- | ------------------------------------------------------------- |
| element   | `HTMLElement` | The HTML element to receive event notifications.              |
| eventName | `string`      | The name of the key event to listen for.                      |
| handler   | `Function`    | A function to call when the notification occurs. Receives the |

#### returns (#addEventListener-returns)

The key event that was registered.

### parseEventName

```ts
static parseEventName(eventName: string): {[key: string]: string}|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L114-L143)

#### Parameters (#parseEventName-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| eventName | `string` |             |

### getEventFullKey

```ts
static getEventFullKey(event: KeyboardEvent): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L145-L164)

#### Parameters (#getEventFullKey-parameters)

| Name  | Type            | Description |
| ----- | --------------- | ----------- |
| event | `KeyboardEvent` |             |

### eventCallback

#### description (#eventCallback-description)

Configures a handler callback for a key event.

```ts
static eventCallback(fullKey: any, handler: Function, zone: NgZone): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L173-L179)

#### Parameters (#eventCallback-parameters)

| Name    | Type       | Description                                               |
| ------- | ---------- | --------------------------------------------------------- |
| fullKey | `any`      | The event name that combines all simultaneous keystrokes. |
| handler | `Function` | The function that responds to the key event.              |
| zone    | `any`      | The zone in which the event occurred.                     |

#### returns (#eventCallback-returns)

A callback function.

### \_normalizeKey

```ts
static _normalizeKey(keyName: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/key_events.ts#L182-L190)

#### Parameters (#\_normalizeKey-parameters)

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| keyName | `string` |             |
