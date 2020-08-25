---
kind: InterfaceDeclaration
name: UpdateResponseData
module: data
---

# UpdateResponseData

## description

Data returned in an EntityAction from the EntityEffects for SAVE_UPDATE_ONE_SUCCESS.
Effectively extends Update<T> with a 'changed' flag.
The is true if the server sent back changes to the entity data after update.
Such changes must be in the entity data in changes property.
Default is false (server did not return entity data; assume it changed nothing).
See EntityEffects.

```ts
interface UpdateResponseData<T> {
  id: number | string;
  changes: Partial<T>;
  changed?: boolean;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/update-response-data.ts#L9-L20)

## Properties

| Name    | Type         | Description                                                             |
| ------- | ------------ | ----------------------------------------------------------------------- |
| id      | `string      | number`                                                                 | Original key (id) of the entity |
| changes | `Partial<T>` | Entity update data. Should include the key (original or changed)        |
| changed | `boolean`    | Whether the server made additional changes after processing the update. |

Such additional changes should be in the 'changes' object.
Default is false |
