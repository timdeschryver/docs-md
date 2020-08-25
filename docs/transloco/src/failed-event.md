---
kind: TypeAliasDeclaration
name: FailedEvent
module: src
---

# FailedEvent

```ts
export type FailedEvent = {
  type: "translationLoadFailure";
  payload: LoadedEvent["payload"];
};
```

[Link to repo](https://github.com/ngneat/transloco/blob/master/projects/ngneat/transloco/src/lib/types.ts#L14-L17)
