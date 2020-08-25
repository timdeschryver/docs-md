---
kind: ClassDeclaration
name: ChangeSetItemFactory
module: data
---

# ChangeSetItemFactory

## description

Factory to create a ChangeSetItem for a ChangeSetOperation

```ts
class ChangeSetItemFactory {
  add<T>(entityName: string, entities: T | T[]): ChangeSetAdd<T>;
  delete(
    entityName: string,
    keys: number | number[] | string | string[]
  ): ChangeSetDelete;
  update<T extends { id: string | number }>(
    entityName: string,
    updates: Update<T> | Update<T>[]
  ): ChangeSetUpdate<T>;
  upsert<T>(entityName: string, entities: T | T[]): ChangeSetUpsert<T>;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L62-L96)

## Methods

### add

```ts
add<T>(entityName: string, entities: T | T[]): ChangeSetAdd<T>;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L64-L67)

#### Parameters (#add-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| entityName | `string` |             |
| entities   | `T       | T[]`        |  |

### delete

```ts
delete(  entityName: string,  keys: number | number[] | string | string[] ): ChangeSetDelete;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L70-L80)

#### Parameters (#delete-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| entityName | `string` |             |
| keys       | `string  | number      | number[] | string[]` |  |

### update

```ts
update<T extends { id: string | number }>(  entityName: string,  updates: Update<T> | Update<T>[] ): ChangeSetUpdate<T>;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L83-L89)

#### Parameters (#update-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| entityName | `string` |             |
| updates    | `any`    |             |

### upsert

```ts
upsert<T>(entityName: string, entities: T | T[]): ChangeSetUpsert<T>;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L92-L95)

#### Parameters (#upsert-parameters)

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| entityName | `string` |             |
| entities   | `T       | T[]`        |  |
