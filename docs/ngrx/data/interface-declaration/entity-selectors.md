---
kind: InterfaceDeclaration
name: EntitySelectors
module: data
---

# EntitySelectors

## description

The selector functions for entity collection members,
Selects from store root, through EntityCache, to the entity collection member
Contrast with {CollectionSelectors}.

```ts
interface EntitySelectors<T> {
  readonly entityName: string;
  readonly selectCollection: MemoizedSelector<Object, EntityCollection<T>>;
  readonly selectCount: MemoizedSelector<Object, number>;
  readonly selectEntities: MemoizedSelector<Object, T[]>;
  readonly selectEntityCache: MemoizedSelector<Object, EntityCache>;
  readonly selectEntityMap: MemoizedSelector<Object, Dictionary<T>>;
  readonly selectFilter: MemoizedSelector<Object, string>;
  readonly selectFilteredEntities: MemoizedSelector<Object, T[]>;
  readonly selectKeys: MemoizedSelector<Object, string[] | number[]>;
  readonly selectLoaded: MemoizedSelector<Object, boolean>;
  readonly selectLoading: MemoizedSelector<Object, boolean>;
  readonly selectChangeState: MemoizedSelector<Object, ChangeStateMap<T>>;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/selectors/entity-selectors.ts#L63-L101)

## Properties

| Name                   | Type     | Description                                                              |
| ---------------------- | -------- | ------------------------------------------------------------------------ |
| entityName             | `string` | Name of the entity collection for these selectors                        |
| selectCollection       | `any`    | The cached EntityCollection itself                                       |
| selectCount            | `any`    | Count of entities in the cached collection.                              |
| selectEntities         | `any`    | All entities in the cached collection.                                   |
| selectEntityCache      | `any`    | The EntityCache                                                          |
| selectEntityMap        | `any`    | Map of entity keys to entities                                           |
| selectFilter           | `any`    | Filter pattern applied by the entity collection's filter function        |
| selectFilteredEntities | `any`    | Entities in the cached collection that pass the filter function          |
| selectKeys             | `any`    | Keys of the cached collection, in the collection's native sort order     |
| selectLoaded           | `any`    | True when the collection has been fully loaded.                          |
| selectLoading          | `any`    | True when a multi-entity query command is in progress.                   |
| selectChangeState      | `any`    | ChangeState (including original values) of entities with unsaved changes |
