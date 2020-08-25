---
kind: InterfaceDeclaration
name: GraphQLMockedContext
module: src
---

# GraphQLMockedContext

```ts
interface GraphQLMockedContext<QueryType> {
  set: typeof set;
  status: typeof status;
  delay: typeof delay;
  fetch: typeof fetch;
  data: DataContext<QueryType>;
  errors: typeof errors;
}
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/graphql.ts#L37-L44)
