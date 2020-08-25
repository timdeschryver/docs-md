---
kind: TypeAliasDeclaration
name: LoadedEvent
module: src
---

# LoadedEvent

```ts
export type LoadedEvent = {
  type: "translationLoadSuccess";
  wasFailure: boolean;
  payload: {
    scope: string | null;
    langName: string;
    /** @deprecated */
    lang: string;
  };
};
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/types.ts#L3-L12)
