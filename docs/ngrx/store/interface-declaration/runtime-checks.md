---
kind: InterfaceDeclaration
name: RuntimeChecks
module: store
---

# RuntimeChecks

```ts
interface RuntimeChecks {
  strictStateSerializability: boolean;
  strictActionSerializability: boolean;
  strictStateImmutability: boolean;
  strictActionImmutability: boolean;
  strictActionWithinNgZone: boolean;
  strictActionTypeUniqueness?: boolean;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/store/src/models.ts#L103-L130)

## Properties

| Name                        | Type      | Description                                                                                                                                                                                |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| strictStateSerializability  | `boolean` | Verifies if the state is serializable                                                                                                                                                      |
| strictActionSerializability | `boolean` | Verifies if the actions are serializable. Please note, you may not need to set it to `true` unless you are storing/replaying actions using external resources, for example `localStorage`. |
| strictStateImmutability     | `boolean` | Verifies that the state isn't mutated                                                                                                                                                      |
| strictActionImmutability    | `boolean` | Verifies that actions aren't mutated                                                                                                                                                       |
| strictActionWithinNgZone    | `boolean` | Verifies that actions are dispatched within NgZone                                                                                                                                         |
| strictActionTypeUniqueness  | `boolean` | Verifies that action types are not registered more than once                                                                                                                               |
