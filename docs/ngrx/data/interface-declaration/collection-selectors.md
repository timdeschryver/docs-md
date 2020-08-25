---
kind: InterfaceDeclaration
name: CollectionSelectors
module: data
---

# CollectionSelectors

## description

The selector functions for entity collection members,
Selects from the entity collection to the collection member
Contrast with {EntitySelectors}.

```ts
interface CollectionSelectors<T> {
  readonly selectCount: Selector<EntityCollection<T>, number>;
  readonly selectEntities: Selector<EntityCollection<T>, T[]>;
  readonly selectEntityMap: Selector<EntityCollection<T>, Dictionary<T>>;
  readonly selectFilter: Selector<EntityCollection<T>, string>;
  readonly selectFilteredEntities: Selector<EntityCollection<T>, T[]>;
  readonly selectKeys: Selector<EntityCollection<T>, string[] | number[]>;
  readonly selectLoaded: Selector<EntityCollection<T>, boolean>;
  readonly selectLoading: Selector<EntityCollection<T>, boolean>;
  readonly selectChangeState: Selector<EntityCollection<T>, ChangeStateMap<T>>;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/selectors/entity-selectors.ts#L27-L56)

## Properties

| Name                   | Type  | Description                                                              |
| ---------------------- | ----- | ------------------------------------------------------------------------ |
| selectCount            | `any` | Count of entities in the cached collection.                              |
| selectEntities         | `any` | All entities in the cached collection.                                   |
| selectEntityMap        | `any` | Map of entity keys to entities                                           |
| selectFilter           | `any` | Filter pattern applied by the entity collection's filter function        |
| selectFilteredEntities | `any` | Entities in the cached collection that pass the filter function          |
| selectKeys             | `any` | Keys of the cached collection, in the collection's native sort order     |
| selectLoaded           | `any` | True when the collection has been fully loaded.                          |
| selectLoading          | `any` | True when a multi-entity query command is in progress.                   |
| selectChangeState      | `any` | ChangeState (including original values) of entities with unsaved changes |
