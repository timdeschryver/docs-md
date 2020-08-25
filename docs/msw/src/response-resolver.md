---
kind: TypeAliasDeclaration
name: ResponseResolver
module: src
---

# ResponseResolver

```ts
export type ResponseResolver<
  RequestType = MockedRequest,
  ContextType = typeof defaultContext
> = (
  req: RequestType,
  res: ResponseComposition,
  context: ContextType
) => AsyncResponseResolverReturnType<MockedResponse>;
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/handlers/requestHandler.ts#L48-L55)
