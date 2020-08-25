---
kind: ClassDeclaration
name: EventManager
module: platform-browser
---

# EventManager

## description

An injectable service that provides event management for Angular
through a browser plug-in.

```ts
class EventManager {
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: Function
  ): Function;
  addGlobalEventListener(
    target: string,
    eventName: string,
    handler: Function
  ): Function;
  getZone(): NgZone;
  _findPluginFor(eventName: string): EventManagerPlugin;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/event_manager.ts#L26-L91)

## publicApi

## Methods

### addEventListener

#### description (#addEventListener-description)

Registers a handler for a specific element and event.

```ts
addEventListener(element: HTMLElement, eventName: string, handler: Function): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/event_manager.ts#L48-L51)

#### Parameters (#addEventListener-parameters)

| Name      | Type          | Description                                                   |
| --------- | ------------- | ------------------------------------------------------------- |
| element   | `HTMLElement` | The HTML element to receive event notifications.              |
| eventName | `string`      | The name of the event to listen for.                          |
| handler   | `Function`    | A function to call when the notification occurs. Receives the |

#### returns (#addEventListener-returns)

A callback function that can be used to remove the handler.

### addGlobalEventListener

#### description (#addGlobalEventListener-description)

Registers a global handler for an event in a target view.

```ts
addGlobalEventListener(target: string, eventName: string, handler: Function): Function;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/event_manager.ts#L62-L65)

#### Parameters (#addGlobalEventListener-parameters)

| Name      | Type       | Description                                                                      |
| --------- | ---------- | -------------------------------------------------------------------------------- |
| target    | `string`   | A target for global event notifications. One of "window", "document", or "body". |
| eventName | `string`   | The name of the event to listen for.                                             |
| handler   | `Function` | A function to call when the notification occurs. Receives the                    |

#### returns (#addGlobalEventListener-returns)

A callback function that can be used to remove the handler.

### getZone

#### description (#getZone-description)

Retrieves the compilation zone in which event listeners are registered.

```ts
getZone(): NgZone;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/event_manager.ts#L70-L72)

### \_findPluginFor

```ts
_findPluginFor(eventName: string): EventManagerPlugin;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/dom/events/event_manager.ts#L75-L90)

#### Parameters (#\_findPluginFor-parameters)

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| eventName | `string` |             |
