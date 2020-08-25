---
kind: FunctionDeclaration
name: waitFor
module: testing-library
---

# waitFor

## description

Re-export waitFor with patched waitFor

```ts
async function waitFor<T>(
  callback: () => T extends Promise<any> ? never : T,
  options?: dtlWaitForOptions
): Promise<T>;
```

[Link to repo](https://github.com/testing-library/angular-testing-library/blob/master/projects/testing-library/src/lib/testing-library.ts#L362-L364)

## Parameters

| Name     | Type                                       | Description |
| -------- | ------------------------------------------ | ----------- |
| callback | `() => T extends Promise<any> ? never : T` |             |
| options  | `dtlWaitForOptions`                        |             |
