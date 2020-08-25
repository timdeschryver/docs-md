---
kind: InterfaceDeclaration
name: EntityDispatcher
module: data
---

# EntityDispatcher

## description

Dispatches EntityCollection actions to their reducers and effects.
The substance of the interface is in EntityCommands.

```ts
interface EntityDispatcher<T> {
  readonly entityName: string;
  readonly guard: EntityActionGuard<T>;
  readonly selectId: IdSelector<T>;
  readonly store: Store<EntityCache>;

  // inherited from EntityCommands
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/dispatchers/entity-dispatcher.ts#L14-L68)

## Properties

| Name       | Type                   | Description                                                   |
| ---------- | ---------------------- | ------------------------------------------------------------- |
| entityName | `string`               | Name of the entity type                                       |
| guard      | `EntityActionGuard<T>` | Utility class with methods to validate EntityAction payloads. |
| selectId   | `any`                  | Returns the primary key (id) of this entity                   |
| store      | `any`                  | Returns the store, scoped to the EntityCache                  |
