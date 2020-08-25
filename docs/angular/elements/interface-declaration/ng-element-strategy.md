---
kind: InterfaceDeclaration
name: NgElementStrategy
module: elements
---

# NgElementStrategy

## description

Underlying strategy used by the NgElement to create/destroy the component and react to input
changes.

```ts
interface NgElementStrategy {
  events: Observable<NgElementStrategyEvent>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/element-strategy.ts#L27-L34)

## publicApi

## Properties

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| events | `any` |             |
