---
kind: ClassDeclaration
name: DefaultIterableDiffer
module: core
---

# DefaultIterableDiffer

```ts
class DefaultIterableDiffer<V>
  implements IterableDiffer<V>, IterableChanges<V> {
  public readonly length: number = 0;
  public readonly collection!: V[] | Iterable<V> | null;

  forEachItem(fn: (record: IterableChangeRecord_<V>) => void);
  forEachOperation(
    fn: (
      item: IterableChangeRecord<V>,
      previousIndex: number | null,
      currentIndex: number | null
    ) => void
  );
  forEachPreviousItem(fn: (record: IterableChangeRecord_<V>) => void);
  forEachAddedItem(fn: (record: IterableChangeRecord_<V>) => void);
  forEachMovedItem(fn: (record: IterableChangeRecord_<V>) => void);
  forEachRemovedItem(fn: (record: IterableChangeRecord_<V>) => void);
  forEachIdentityChange(fn: (record: IterableChangeRecord_<V>) => void);
  diff(
    collection: NgIterable<V> | null | undefined
  ): DefaultIterableDiffer<V> | null;
  check(collection: NgIterable<V>): boolean;
  _reset();
  _mismatch(
    record: IterableChangeRecord_<V> | null,
    item: V,
    itemTrackBy: any,
    index: number
  ): IterableChangeRecord_<V>;
  _verifyReinsertion(
    record: IterableChangeRecord_<V>,
    item: V,
    itemTrackBy: any,
    index: number
  ): IterableChangeRecord_<V>;
  _truncate(record: IterableChangeRecord_<V> | null);
  _reinsertAfter(
    record: IterableChangeRecord_<V>,
    prevRecord: IterableChangeRecord_<V> | null,
    index: number
  ): IterableChangeRecord_<V>;
  _moveAfter(
    record: IterableChangeRecord_<V>,
    prevRecord: IterableChangeRecord_<V> | null,
    index: number
  ): IterableChangeRecord_<V>;
  _addAfter(
    record: IterableChangeRecord_<V>,
    prevRecord: IterableChangeRecord_<V> | null,
    index: number
  ): IterableChangeRecord_<V>;
  _insertAfter(
    record: IterableChangeRecord_<V>,
    prevRecord: IterableChangeRecord_<V> | null,
    index: number
  ): IterableChangeRecord_<V>;
  _remove(record: IterableChangeRecord_<V>): IterableChangeRecord_<V>;
  _unlink(record: IterableChangeRecord_<V>): IterableChangeRecord_<V>;
  _addToMoves(
    record: IterableChangeRecord_<V>,
    toIndex: number
  ): IterableChangeRecord_<V>;
  _addIdentityChange(record: IterableChangeRecord_<V>, item: V);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L32-L565)

## deprecated

v4.0.0 - Should not be part of public API.

## publicApi

## Properties

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| length     | `number` |             |
| collection | `any`    |             |

## Methods

### forEachItem

```ts
forEachItem(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L58-L63)

#### Parameters (#forEachItem-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### forEachOperation

```ts
forEachOperation(   fn: (item: IterableChangeRecord<V>, previousIndex: number|null, currentIndex: number|null) =>     void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L65-L115)

#### Parameters (#forEachOperation-parameters)

| Name | Type                                                   | Description                |
| ---- | ------------------------------------------------------ | -------------------------- |
| fn   | `(item: IterableChangeRecord<V>, previousIndex: number | null, currentIndex: number | null) => void` |  |

### forEachPreviousItem

```ts
forEachPreviousItem(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L117-L122)

#### Parameters (#forEachPreviousItem-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### forEachAddedItem

```ts
forEachAddedItem(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L124-L129)

#### Parameters (#forEachAddedItem-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### forEachMovedItem

```ts
forEachMovedItem(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L131-L136)

#### Parameters (#forEachMovedItem-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### forEachRemovedItem

```ts
forEachRemovedItem(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L138-L143)

#### Parameters (#forEachRemovedItem-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### forEachIdentityChange

```ts
forEachIdentityChange(fn: (record: IterableChangeRecord_<V>) => void);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L145-L150)

#### Parameters (#forEachIdentityChange-parameters)

| Name | Type                                         | Description |
| ---- | -------------------------------------------- | ----------- |
| fn   | `(record: IterableChangeRecord_<V>) => void` |             |

### diff

```ts
diff(collection: NgIterable<V>|null|undefined): DefaultIterableDiffer<V>|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L152-L164)

#### Parameters (#diff-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| collection | `any` |             |

### onDestroy

```ts
onDestroy();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L166-L166)

### check

```ts
check(collection: NgIterable<V>): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L168-L218)

#### Parameters (#check-parameters)

| Name       | Type  | Description |
| ---------- | ----- | ----------- |
| collection | `any` |             |

### \_reset

#### description (#\_reset-description)

Reset the state of the change objects to show no changes. This means set previousKey to
currentKey, and clear all of the queues (additions, moves, removals).
Set the previousIndexes of moved and added items to their currentIndexes
Reset the list of additions, moves and removals

```ts
_reset();
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L236-L261)

#### internal (#\_reset-internal)

### \_mismatch

#### description (#\_mismatch-description)

This is the core function which handles differences between collections.

- `record` is the record which we saw at this position last time. If null then it is a new
  item.
- `item` is the current item in the collection
- `index` is the position of the item in the collection

```ts
_mismatch(record: IterableChangeRecord_<V>|null, item: V, itemTrackBy: any, index: number):   IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L273-L310)

#### internal (#\_mismatch-internal)

#### Parameters (#\_mismatch-parameters)

| Name        | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| record      | `IterableChangeRecord_<V>` |             |
| item        | `V`                        |             |
| itemTrackBy | `any`                      |             |
| index       | `number`                   |             |

### \_verifyReinsertion

#### description (#\_verifyReinsertion-description)

This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)

Use case: `[a, a]` => `[b, a, a]`

If we did not have this check then the insertion of `b` would:

1. evict first `a`
2. insert `b` at `0` index.
3. leave `a` at index `1` as is. <-- this is wrong!
4. reinsert `a` at index 2. <-- this is wrong!

The correct behavior is:

1. evict first `a`
2. insert `b` at `0` index.
3. reinsert `a` at index 1.
4. move `a` at from `1` to `2`.

Double check that we have not evicted a duplicate item. We need to check if the item type may
have already been removed:
The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
at the end.

```ts
_verifyReinsertion(record: IterableChangeRecord_<V>, item: V, itemTrackBy: any, index: number):   IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L339-L350)

#### internal (#\_verifyReinsertion-internal)

#### Parameters (#\_verifyReinsertion-parameters)

| Name        | Type                       | Description |
| ----------- | -------------------------- | ----------- |
| record      | `IterableChangeRecord_<V>` |             |
| item        | `V`                        |             |
| itemTrackBy | `any`                      |             |
| index       | `number`                   |             |

### \_truncate

#### description (#\_truncate-description)

Get rid of any excess {@link IterableChangeRecord\_}s from the previous collection

- `record` The first excess {@link IterableChangeRecord\_}.

```ts
_truncate(record: IterableChangeRecord_<V>|null);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L359-L385)

#### internal (#\_truncate-internal)

#### Parameters (#\_truncate-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| record | `IterableChangeRecord_<V>` |             |

### \_reinsertAfter

```ts
_reinsertAfter(   record: IterableChangeRecord_<V>, prevRecord: IterableChangeRecord_<V>|null,   index: number): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L388-L411)

#### Parameters (#\_reinsertAfter-parameters)

| Name       | Type                       | Description |
| ---------- | -------------------------- | ----------- |
| record     | `IterableChangeRecord_<V>` |             |
| prevRecord | `IterableChangeRecord_<V>` |             |
| index      | `number`                   |             |

### \_moveAfter

```ts
_moveAfter(   record: IterableChangeRecord_<V>, prevRecord: IterableChangeRecord_<V>|null,   index: number): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L414-L421)

#### Parameters (#\_moveAfter-parameters)

| Name       | Type                       | Description |
| ---------- | -------------------------- | ----------- |
| record     | `IterableChangeRecord_<V>` |             |
| prevRecord | `IterableChangeRecord_<V>` |             |
| index      | `number`                   |             |

### \_addAfter

```ts
_addAfter(   record: IterableChangeRecord_<V>, prevRecord: IterableChangeRecord_<V>|null,   index: number): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L424-L440)

#### Parameters (#\_addAfter-parameters)

| Name       | Type                       | Description |
| ---------- | -------------------------- | ----------- |
| record     | `IterableChangeRecord_<V>` |             |
| prevRecord | `IterableChangeRecord_<V>` |             |
| index      | `number`                   |             |

### \_insertAfter

```ts
_insertAfter(   record: IterableChangeRecord_<V>, prevRecord: IterableChangeRecord_<V>|null,   index: number): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L443-L476)

#### Parameters (#\_insertAfter-parameters)

| Name       | Type                       | Description |
| ---------- | -------------------------- | ----------- |
| record     | `IterableChangeRecord_<V>` |             |
| prevRecord | `IterableChangeRecord_<V>` |             |
| index      | `number`                   |             |

### \_remove

```ts
_remove(record: IterableChangeRecord_<V>): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L479-L481)

#### Parameters (#\_remove-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| record | `IterableChangeRecord_<V>` |             |

### \_unlink

```ts
_unlink(record: IterableChangeRecord_<V>): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L484-L508)

#### Parameters (#\_unlink-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| record | `IterableChangeRecord_<V>` |             |

### \_addToMoves

```ts
_addToMoves(record: IterableChangeRecord_<V>, toIndex: number): IterableChangeRecord_<V>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L511-L530)

#### Parameters (#\_addToMoves-parameters)

| Name    | Type                       | Description |
| ------- | -------------------------- | ----------- |
| record  | `IterableChangeRecord_<V>` |             |
| toIndex | `number`                   |             |

### \_addIdentityChange

```ts
_addIdentityChange(record: IterableChangeRecord_<V>, item: V);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/differs/default_iterable_differ.ts#L556-L564)

#### Parameters (#\_addIdentityChange-parameters)

| Name   | Type                       | Description |
| ------ | -------------------------- | ----------- |
| record | `IterableChangeRecord_<V>` |             |
| item   | `V`                        |             |
