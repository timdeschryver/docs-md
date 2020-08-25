---
kind: TypeAliasDeclaration
name: AsyncResponseResolverReturnType
module: src
---

# AsyncResponseResolverReturnType

```ts
export type AsyncResponseResolverReturnType<R> =
  | Promise<ResponseResolverReturnType<R>>
  | ResponseResolverReturnType<R>;
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/handlers/requestHandler.ts#L44-L46)
