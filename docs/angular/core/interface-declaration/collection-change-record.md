---
kind: InterfaceDeclaration
name: CollectionChangeRecord
module: core
---

# CollectionChangeRecord

```ts
interface CollectionChangeRecord<V> {
  // inherited from IterableChangeRecord
  readonly currentIndex: number | null;
  readonly previousIndex: number | null;
  readonly item: V;
  readonly trackById: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/iterable_differs.ts#L119-L119)

## deprecated

v4.0.0 - Use IterableChangeRecord instead.

## publicApi
