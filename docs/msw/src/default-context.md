---
kind: VariableDeclaration
name: defaultContext
module: src
---

# defaultContext

```ts
const defaultContext: {
  status: (
    statusCode: number,
    statusText?: string
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  set: typeof set;
  delay: (
    durationMs?: number
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  fetch: <ResponseType = any>(
    input: string | MockedRequest,
    requestInit?: RequestInit
  ) => Promise<ResponseType>;
};
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/handlers/requestHandler.ts#L9-L14)
