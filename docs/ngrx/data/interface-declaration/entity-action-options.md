---
kind: InterfaceDeclaration
name: EntityActionOptions
module: data
---

# EntityActionOptions

```ts
interface EntityActionOptions {
  readonly correlationId?: any;
  readonly isOptimistic?: boolean;
  readonly mergeStrategy?: MergeStrategy;
  readonly tag?: string;
  error?: Error;
  skip?: boolean;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/data/src/actions/entity-action.ts#L13-L37)

## Properties

| Name                                                                   | Type            | Description                                                                        |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------- |
| correlationId                                                          | `any`           | Correlate related EntityActions, particularly related saves. Must be serializable. |
| isOptimistic                                                           | `boolean`       | True if should perform action optimistically (before server responds)              |
| mergeStrategy                                                          | `MergeStrategy` |                                                                                    |
| tag                                                                    | `string`        | The tag to use in the action's type. The entityName if no tag specified.           |
| error                                                                  | `Error`         | The action was determined (usually by a reducer) to be in error.                   |
| Downstream effects should not process but rather treat it as an error. |
| skip                                                                   | `boolean`       | Downstream effects should skip processing this action but should return            |
| an innocuous Observable<Action> of success.                            |
