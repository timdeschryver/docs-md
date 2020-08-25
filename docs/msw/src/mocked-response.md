---
kind: InterfaceDeclaration
name: MockedResponse
module: src
---

# MockedResponse

```ts
interface MockedResponse {
  body: any;
  status: number;
  statusText: string;
  headers: Headers;
  once: boolean;
  delay?: number;
}
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/response.ts#L5-L12)
