---
kind: FunctionDeclaration
name: waitForElementToBeRemoved
module: testing-library
---

# waitForElementToBeRemoved

## description

Re-export waitForElementToBeRemoved with patched waitForElementToBeRemoved

```ts
async function waitForElementToBeRemoved<T>(
  callback: (() => T) | T,
  options?: dtlWaitForOptions
): Promise<void>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/testing-library.ts#L369-L371)

## Parameters

| Name     | Type                | Description |
| -------- | ------------------- | ----------- |
| callback | `(() => T)          | T`          |  |
| options  | `dtlWaitForOptions` |             |
