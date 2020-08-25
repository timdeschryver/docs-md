---
kind: FunctionDeclaration
name: buildQueries
module: testing-library
---

# buildQueries

```ts
function buildQueries<Arguments extends any[]>(
  queryByAll: GetAllBy<Arguments>,
  getMultipleError: (container: HTMLElement, ...args: Arguments) => string,
  getMissingError: (container: HTMLElement, ...args: Arguments) => string
): BuiltQueryMethods<Arguments>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/node_modules/@testing-library/dom/types/query-helpers.d.ts#L58-L62)

## Parameters

| Name             | Type                                                     | Description |
| ---------------- | -------------------------------------------------------- | ----------- |
| queryByAll       | `QueryMethod<Arguments, HTMLElement[]>`                  |             |
| getMultipleError | `(container: HTMLElement, ...args: Arguments) => string` |             |
| getMissingError  | `(container: HTMLElement, ...args: Arguments) => string` |             |
