---
kind: TypeAliasDeclaration
name: RenderResultQueries
module: testing-library
---

# RenderResultQueries

```ts
export type RenderResultQueries<Q extends Queries = typeof queries> = {
  [P in keyof Q]: BoundFunction<Q[P]>;
};
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/models.ts#L7-L7)
