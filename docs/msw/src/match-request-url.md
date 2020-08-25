---
kind: FunctionDeclaration
name: matchRequestUrl
module: src
---

# matchRequestUrl

## description

Returns the result of matching given request URL
against a mask.

```ts
function matchRequestUrl(url: URL, mask: Mask): ReturnType<typeof match>;
```

[Link to repo](https://github.com/mswjs/msw/blob/master/src/utils/matching/matchRequestUrl.ts#L11-L20)

## Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| url  | `URL`  |             |
| mask | `Mask` |             |
