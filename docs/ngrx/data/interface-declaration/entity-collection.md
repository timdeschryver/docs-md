---
kind: InterfaceDeclaration
name: EntityCollection
module: data
---

# EntityCollection

## description

Data and information about a collection of entities of a single type.
EntityCollections are maintained in the EntityCache within the ngrx store.

```ts
interface EntityCollection<T = any> {
  entityName: string;
  changeState: ChangeStateMap<T>;
  filter?: string;
  loaded: boolean;
  loading: boolean;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/reducers/entity-collection.ts#L34-L45)

## Properties

| Name        | Type      | Description                                                             |
| ----------- | --------- | ----------------------------------------------------------------------- |
| entityName  | `string`  | Name of the entity type for this collection                             |
| changeState | `any`     | A map of ChangeStates, keyed by id, for entities with unsaved changes   |
| filter      | `string`  | The user's current collection filter pattern                            |
| loaded      | `boolean` | true if collection was ever filled by QueryAll; forced false if cleared |
| loading     | `boolean` | true when a query or save operation is in progress                      |
