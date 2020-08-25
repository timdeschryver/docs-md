---
kind: InterfaceDeclaration
name: KeyValue
module: common
---

# KeyValue

## description

A key value pair.
Usually used to represent the key value pairs from a Map or Object.

```ts
interface KeyValue<K, V> {
  key: K;
  value: V;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/common/src/pipes/keyvalue_pipe.ts#L21-L24)

## publicApi

## Properties

| Name  | Type | Description |
| ----- | ---- | ----------- |
| key   | `K`  |             |
| value | `V`  |             |
