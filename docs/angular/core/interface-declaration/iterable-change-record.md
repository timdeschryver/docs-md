---
kind: InterfaceDeclaration
name: IterableChangeRecord
module: core
---

# IterableChangeRecord

## description

Record representing the item change information.

```ts
interface IterableChangeRecord<V> {
  readonly currentIndex: number | null;
  readonly previousIndex: number | null;
  readonly item: V;
  readonly trackById: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L101-L113)

## publicApi

## Properties

| Name          | Type     | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| currentIndex  | `number` | Current index of the item in `Iterable` or null if removed. |
| previousIndex | `number` | Previous index of the item in `Iterable` or null if added.  |
| item          | `V`      | The item.                                                   |
| trackById     | `any`    | Track by identity as computed by the `TrackByFunction`.     |
