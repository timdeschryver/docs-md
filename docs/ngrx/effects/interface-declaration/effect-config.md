---
kind: InterfaceDeclaration
name: EffectConfig
module: effects
---

# EffectConfig

## description

Configures an effect created by `createEffect`.

```ts
interface EffectConfig {
  dispatch?: boolean;
  useEffectsErrorHandler?: boolean;
}
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/effects/src/models.ts#L4-L14)

## Properties

| Name                                                                | Type      | Description                                                                                     |
| ------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------- |
| dispatch                                                            | `boolean` | Determines if the action emitted by the effect is dispatched to the store.                      |
| If false, effect does not need to return type `Observable<Action>`. |
| useEffectsErrorHandler                                              | `boolean` | Determines if the effect will be resubscribed to if an error occurs in the main actions stream. |
