---
kind: InterfaceDeclaration
name: KeyValueChanges
module: core
---

# KeyValueChanges

## description

An object describing the changes in the `Map` or `{[k:string]: string}` since last time
`KeyValueDiffer#diff()` was invoked.

```ts
interface KeyValueChanges<K, V> {}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/keyvalue_differs.ts#L46-L73)

## publicApi
