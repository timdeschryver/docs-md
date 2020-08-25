---
kind: TypeAliasDeclaration
name: MaybeAsync
module: src
---

# MaybeAsync

```ts
export type MaybeAsync<T = any> = Promise<T> | Observable<T> | T;
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-translations/src/lib/transloco.storage.ts#L3-L3)
