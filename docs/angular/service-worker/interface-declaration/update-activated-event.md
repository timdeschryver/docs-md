---
kind: InterfaceDeclaration
name: UpdateActivatedEvent
module: service-worker
---

# UpdateActivatedEvent

## description

An event emitted when a new version of the app has been downloaded and activated.

```ts
interface UpdateActivatedEvent {
  type: "UPDATE_ACTIVATED";
  previous?: { hash: string; appData?: Object };
  current: { hash: string; appData?: Object };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/service-worker/src/low_level.ts#L30-L34)

## publicApi

## Properties

| Name     | Type                                  | Description |
| -------- | ------------------------------------- | ----------- |
| type     | `"UPDATE_ACTIVATED"`                  |             |
| previous | `{ hash: string; appData?: Object; }` |             |
| current  | `{ hash: string; appData?: Object; }` |             |
