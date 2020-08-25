---
kind: FunctionDeclaration
name: getQueriesForElement
module: testing-library
---

# getQueriesForElement

```ts
function getQueriesForElement<T extends Queries = typeof queries>(
  element: HTMLElement,
  queriesToBind?: T
): BoundFunctions<T>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/node_modules/@testing-library/dom/types/get-queries-for-element.d.ts#L26-L29)

## Parameters

| Name          | Type          | Description |
| ------------- | ------------- | ----------- |
| element       | `HTMLElement` |             |
| queriesToBind | `T`           |             |
