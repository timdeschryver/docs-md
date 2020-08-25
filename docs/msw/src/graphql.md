---
kind: VariableDeclaration
name: graphql
module: src
---

# graphql

```ts
const graphql: {
  link: typeof createGraphQLLink;
  query: <QueryType, VariablesType = Record<string, any>>(
    expectedOperation: Mask,
    resolver: GraphQLResponseResolver<QueryType, VariablesType>
  ) => RequestHandler<
    GraphQLMockedRequest<VariablesType>,
    GraphQLMockedContext<QueryType>,
    GraphQLRequestParsedResult<VariablesType>,
    GraphQLMockedRequest<VariablesType>
  >;
  mutation: <QueryType, VariablesType = Record<string, any>>(
    expectedOperation: Mask,
    resolver: GraphQLResponseResolver<QueryType, VariablesType>
  ) => RequestHandler<
    GraphQLMockedRequest<VariablesType>,
    GraphQLMockedContext<QueryType>,
    GraphQLRequestParsedResult<VariablesType>,
    GraphQLMockedRequest<VariablesType>
  >;
};
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/graphql.ts#L218-L221)
