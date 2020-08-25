---
kind: InterfaceDeclaration
name: TranslocoConfig
module: src
---

# TranslocoConfig

```ts
interface TranslocoConfig {
  rootTranslationsPath?: string;
  defaultLang?: string;
  scopedLibs?: string[];
  scopePathMap?: { [key: string]: string };
  langs?: string[];
  keysManager?: {
    input?: string | string[];
    output?: string;
    marker?: string;
    addMissingKeys?: boolean;
    replace?: boolean;
    defaultValue?: string | undefined;
  };
}
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco-utils/src/lib/types.ts#L1-L15)
