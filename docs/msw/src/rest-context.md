---
kind: VariableDeclaration
name: restContext
module: src
---

# restContext

```ts
const restContext: {
  set: typeof set;
  status: (
    statusCode: number,
    statusText?: string
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  cookie: (
    name: string,
    value: string,
    options?: any
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  body: <T>(
    value: T
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  text: (
    body: string
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  json: (
    body: Record<string, any>
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  xml: (
    body: string
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  delay: (
    durationMs?: number
  ) => import("C:/Users/tdeschryver/dev/forks/msw/src/response").ResponseTransformer;
  fetch: <ResponseType = any>(
    input: string | MockedRequest,
    requestInit?: RequestInit
  ) => Promise<ResponseType>;
};
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/rest.ts#L36-L46)
