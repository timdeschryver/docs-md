---
kind: InterfaceDeclaration
name: MockedRequest
module: src
---

# MockedRequest

```ts
interface MockedRequest {
  url: URL;
  method: Request["method"];
  headers: Headers;
  cookies: Record<string, string>;
  mode: Request["mode"];
  keepalive: Request["keepalive"];
  cache: Request["cache"];
  destination: Request["destination"];
  integrity: Request["integrity"];
  credentials: Request["credentials"];
  redirect: Request["redirect"];
  referrer: Request["referrer"];
  referrerPolicy: Request["referrerPolicy"];
  body: Record<string, any> | string | undefined;
  bodyUsed: Request["bodyUsed"];
  params: RequestParams;
}
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/handlers/requestHandler.ts#L16-L33)
