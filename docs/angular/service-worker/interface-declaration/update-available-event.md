---
kind: InterfaceDeclaration
name: UpdateAvailableEvent
module: service-worker
---

# UpdateAvailableEvent

## description

An event emitted when a new version of the app is available.

```ts
interface UpdateAvailableEvent {
  type: "UPDATE_AVAILABLE";
  current: { hash: string; appData?: Object };
  available: { hash: string; appData?: Object };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/low_level.ts#L19-L23)

## publicApi

## Properties

| Name      | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| type      | `"UPDATE_AVAILABLE"`                  |             |
| current   | `{ hash: string; appData?: Object; }` |             |
| available | `{ hash: string; appData?: Object; }` |             |
