---
kind: TypeAliasDeclaration
name: GraphQLMockedRequest
module: src
---

# GraphQLMockedRequest

```ts
export type GraphQLMockedRequest<VariablesType = Record<string, any>> = Omit<
  MockedRequest,
  "body"
> & {
  body:
    | (GraphQLRequestPayload<VariablesType> & Record<string, any>)
    | undefined;
  variables: VariablesType;
};
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/graphql.ts#L26-L32)
