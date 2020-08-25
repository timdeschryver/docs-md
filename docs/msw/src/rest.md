---
kind: VariableDeclaration
name: rest
module: src
---

# rest

```ts
const rest: {
  get: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
  post: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
  put: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
  delete: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
  patch: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
  options: (
    mask: Mask,
    resolver: ResponseResolver<
      MockedRequest,
      {
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
      }
    >
  ) => RequestHandler<
    MockedRequest,
    {
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
    },
    ParsedRestRequest,
    MockedRequest
  >;
};
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/rest.ts#L139-L146)
