---
kind: FunctionDeclaration
name: ɵbypassSanitizationTrustUrl
module: core
---

# ɵbypassSanitizationTrustUrl

## description

Mark `url` string as trusted.

This function wraps the trusted string in `String` and brands it in a way which makes it
recognizable to {@link urlSanitizer} to be trusted implicitly.

```ts
function bypassSanitizationTrustUrl(trustedUrl: string): SafeUrl;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L176-L178)

## Parameters

| Name       | Type     | Description                                        |
| ---------- | -------- | -------------------------------------------------- |
| trustedUrl | `string` | `url` string which needs to be implicitly trusted. |

## returns

a `url` which has been branded to be implicitly trusted.
