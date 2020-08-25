---
kind: InterfaceDeclaration
name: KeyValueChangeRecord
module: core
---

# KeyValueChangeRecord

## description

Record representing the item change information.

```ts
interface KeyValueChangeRecord<K, V> {
  readonly key: K;
  readonly currentValue: V | null;
  readonly previousValue: V | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L80-L95)

## publicApi

## Properties

| Name          | Type | Description                                     |
| ------------- | ---- | ----------------------------------------------- |
| key           | `K`  | Current key in the Map.                         |
| currentValue  | `V`  | Current value for the key or `null` if removed. |
| previousValue | `V`  | Previous value for the key or `null` if added.  |
