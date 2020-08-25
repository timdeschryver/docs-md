---
kind: ClassDeclaration
name: EntitySelectors$Factory
module: data
---

# EntitySelectors\$Factory

```ts
class EntitySelectors$Factory {
  entityCache$: Observable<EntityCache>;
  entityActionErrors$: Observable<EntityAction>;

  create<T, S$ extends EntitySelectors$<T> = EntitySelectors$<T>>(
    entityName: string,
    selectors: EntitySelectors<T>
  ): S$;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/selectors/entity-selectors$.ts#L73-L128)

## Properties

| Name                 | Type                            | Description                                                                   |
| -------------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| entityCache\$        | `Observable<EntityCache>`       | Observable of the EntityCache                                                 |
| entityActionErrors\$ | `Observable<EntityAction<any>>` | Observable of error EntityActions (e.g. QUERY_ALL_ERROR) for all entity types |

## Methods

### create

#### description (#create-description)

Creates an entity collection's selectors\$ observables for this factory's store.
`selectors$` are observable selectors of the cached entity collection.

```ts
create<T, S$ extends EntitySelectors$<T> = EntitySelectors$<T>>(  entityName: string,  selectors: EntitySelectors<T> ): S$;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/selectors/entity-selectors$.ts#L106-L127)

#### Parameters (#create-parameters)

| Name       | Type                 | Description                               |
| ---------- | -------------------- | ----------------------------------------- |
| entityName | `string`             | - is also the name of the collection.     |
| selectors  | `EntitySelectors<T>` | - selector functions for this collection. |
