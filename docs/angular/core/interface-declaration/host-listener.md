---
kind: InterfaceDeclaration
name: HostListener
module: core
---

# HostListener

## description

Type of the HostListener metadata.

```ts
interface HostListener {
  eventName?: string;
  args?: string[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/metadata/directives.ts#L837-L846)

## publicApi

## Properties

| Name      | Type       | Description                                                             |
| --------- | ---------- | ----------------------------------------------------------------------- |
| eventName | `string`   | The DOM event to listen for.                                            |
| args      | `string[]` | A set of arguments to pass to the handler method when the event occurs. |
