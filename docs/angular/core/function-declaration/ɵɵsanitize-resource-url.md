---
kind: FunctionDeclaration
name: ɵɵsanitizeResourceUrl
module: core
---

# ɵɵsanitizeResourceUrl

## description

A `url` sanitizer which only lets trusted `url`s through.

This passes only `url`s marked trusted by calling {@link bypassSanitizationTrustResourceUrl}.

```ts
function ɵɵsanitizeResourceUrl(unsafeResourceUrl: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L108-L117)

## Parameters

| Name              | Type  | Description                               |
| ----------------- | ----- | ----------------------------------------- |
| unsafeResourceUrl | `any` | untrusted `url`, typically from the user. |

## returns

`url` string which is safe to bind to the `src` properties such as `<img src>`, because
only trusted `url`s have been allowed to pass.

## publicApi
