---
kind: InterfaceDeclaration
name: RequestHandler
module: src
---

# RequestHandler

```ts
interface RequestHandler<
  RequestType = MockedRequest,
  ContextType = typeof defaultContext,
  ParsedRequest = any,
  PublicRequest = RequestType
> {
  parse?: (req: RequestType) => ParsedRequest | null;
  getPublicRequest?: (
    req: RequestType,
    parsedRequest: ParsedRequest
  ) => PublicRequest;
  predicate: (req: RequestType, parsedRequest: ParsedRequest) => boolean;
  resolver: ResponseResolver<RequestType, ContextType>;
  defineContext?: (req: PublicRequest) => ContextType;
  log: (
    req: PublicRequest,
    res: ResponseWithSerializedHeaders,
    handler: RequestHandler<RequestType, ContextType>,
    parsedRequest: ParsedRequest
  ) => void;
  shouldSkip?: boolean;
}
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/handlers/requestHandler.ts#L57-L109)
