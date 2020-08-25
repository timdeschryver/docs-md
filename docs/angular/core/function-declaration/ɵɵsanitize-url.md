---
kind: FunctionDeclaration
name: ɵɵsanitizeUrl
module: core
---

# ɵɵsanitizeUrl

## description

A `url` sanitizer which converts untrusted `url` **string** into trusted string by removing
dangerous
content.

This method parses the `url` and locates potentially dangerous content (such as javascript) and
removes it.

It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustUrl}.

```ts
function ɵɵsanitizeUrl(unsafeUrl: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L86-L95)

## Parameters

| Name      | Type  | Description                               |
| --------- | ----- | ----------------------------------------- |
| unsafeUrl | `any` | untrusted `url`, typically from the user. |

## returns

`url` string which is safe to bind to the `src` properties such as `<img src>`, because
all of the dangerous javascript has been removed.

## publicApi
