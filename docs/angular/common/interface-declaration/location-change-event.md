---
kind: InterfaceDeclaration
name: LocationChangeEvent
module: common
---

# LocationChangeEvent

## description

A serializable version of the event from `onPopState` or `onHashChange`

```ts
interface LocationChangeEvent {
  type: string;
  state: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/location/platform_location.ts#L81-L84)

## publicApi

## Properties

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| type  | `string` |             |
| state | `any`    |             |
