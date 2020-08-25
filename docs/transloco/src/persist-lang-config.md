---
kind: TypeAliasDeclaration
name: PersistLangConfig
module: src
---

# PersistLangConfig

```ts
export type PersistLangConfig = {
  storage: Provider;
  storageKey?: string;
  getLangFn?: (langs: {
    cachedLang: string;
    browserLang: string;
    cultureLang: string;
    defaultLang: string;
  }) => string;
};
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-persist-lang/src/lib/persist-lang.config.ts#L3-L7)
