---
kind: TypeAliasDeclaration
name: GraphQLResponseResolver
module: src
---

# GraphQLResponseResolver

```ts
export type GraphQLResponseResolver<QueryType, VariablesType> = (
  req: GraphQLMockedRequest<VariablesType>,
  res: ResponseComposition,
  context: GraphQLMockedContext<QueryType>
) => AsyncResponseResolverReturnType<MockedResponse>;
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/graphql.ts#L55-L59)
