---
kind: InterfaceDeclaration
name: ChangeSet
module: data
---

# ChangeSet

```ts
interface ChangeSet<T = any> {
  changes: ChangeSetItem[];
  extras?: T;
  tag?: string;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-cache-change-set.ts#L45-L57)

## Properties

| Name                                                                      | Type              | Description                                                              |
| ------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------ |
| changes                                                                   | `ChangeSetItem[]` | An array of ChangeSetItems to be processed in the array order            |
| extras                                                                    | `T`               | An arbitrary, serializable object that should travel with the ChangeSet. |
| Meaningful to the ChangeSet producer and consumer. Ignored by @ngrx/data. |
| tag                                                                       | `string`          | An arbitrary string, identifying the ChangeSet and perhaps its purpose   |
