---
kind: InterfaceDeclaration
name: EntitySelectors$
module: data
---

# EntitySelectors\$

## description

The selector observable functions for entity collection members.

```ts
interface EntitySelectors$<T> {
  readonly entityName: string;
  readonly collection$: Observable<EntityCollection> | Store<EntityCollection>;
  readonly count$: Observable<number> | Store<number>;
  readonly entities$: Observable<T[]> | Store<T[]>;
  readonly entityActions$: Observable<EntityAction>;
  readonly entityMap$: Observable<Dictionary<T>> | Store<Dictionary<T>>;
  readonly errors$: Observable<EntityAction>;
  readonly filter$: Observable<string> | Store<string>;
  readonly filteredEntities$: Observable<T[]> | Store<T[]>;
  readonly keys$: Observable<string[] | number[]> | Store<string[] | number[]>;
  readonly loaded$: Observable<boolean> | Store<boolean>;
  readonly loading$: Observable<boolean> | Store<boolean>;
  readonly changeState$:
    | Observable<ChangeStateMap<T>>
    | Store<ChangeStateMap<T>>;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/selectors/entity-selectors$.ts#L26-L70)

## Properties

| Name               | Type                            | Description                                                                            |
| ------------------ | ------------------------------- | -------------------------------------------------------------------------------------- |
| entityName         | `string`                        | Name of the entity collection for these selectors\$                                    |
| collection\$       | `any`                           | Observable of the collection as a whole                                                |
| count\$            | `any`                           | Observable of count of entities in the cached collection.                              |
| entities\$         | `any`                           | Observable of all entities in the cached collection.                                   |
| entityActions\$    | `Observable<EntityAction<any>>` | Observable of actions related to this entity type.                                     |
| entityMap\$        | `any`                           | Observable of the map of entity keys to entities                                       |
| errors\$           | `Observable<EntityAction<any>>` | Observable of error actions related to this entity type.                               |
| filter\$           | `any`                           | Observable of the filter pattern applied by the entity collection's filter function    |
| filteredEntities\$ | `any`                           | Observable of entities in the cached collection that pass the filter function          |
| keys\$             | `any`                           | Observable of the keys of the cached collection, in the collection's native sort order |
| loaded\$           | `any`                           | Observable true when the collection has been loaded                                    |
| loading\$          | `any`                           | Observable true when a multi-entity query command is in progress.                      |
| changeState\$      | `any`                           | ChangeState (including original values) of entities with unsaved changes               |
