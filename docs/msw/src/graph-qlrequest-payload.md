---
kind: InterfaceDeclaration
name: GraphQLRequestPayload
module: src
---

# GraphQLRequestPayload

```ts
interface GraphQLRequestPayload<VariablesType> {
  query: string;
  variables?: VariablesType;
}
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/graphql.ts#L61-L64)
