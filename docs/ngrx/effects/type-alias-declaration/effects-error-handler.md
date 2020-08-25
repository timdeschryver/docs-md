---
kind: TypeAliasDeclaration
name: EffectsErrorHandler
module: effects
---

# EffectsErrorHandler

```ts
export type EffectsErrorHandler = <T extends Action>(
  observable$: Observable<T>,
  errorHandler: ErrorHandler
) => Observable<T>;
```

[Link to repo](https://github.com/ngrx/platform/blob/master/modules/effects/src/effects_error_handler.ts#L6-L9)
