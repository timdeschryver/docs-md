---
kind: FunctionDeclaration
name: ɵbypassSanitizationTrustResourceUrl
module: core
---

# ɵbypassSanitizationTrustResourceUrl

## description

Mark `url` string as trusted.

This function wraps the trusted string in `String` and brands it in a way which makes it
recognizable to {@link resourceUrlSanitizer} to be trusted implicitly.

```ts
function bypassSanitizationTrustResourceUrl(
  trustedResourceUrl: string
): SafeResourceUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L188-L190)

## Parameters

| Name               | Type     | Description                                        |
| ------------------ | -------- | -------------------------------------------------- |
| trustedResourceUrl | `string` | `url` string which needs to be implicitly trusted. |

## returns

a `url` which has been branded to be implicitly trusted.
