---
kind: FunctionDeclaration
name: ɵbypassSanitizationTrustHtml
module: core
---

# ɵbypassSanitizationTrustHtml

## description

Mark `html` string as trusted.

This function wraps the trusted string in `String` and brands it in a way which makes it
recognizable to {@link htmlSanitizer} to be trusted implicitly.

```ts
function bypassSanitizationTrustHtml(trustedHtml: string): SafeHtml;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L140-L142)

## Parameters

| Name        | Type     | Description                                         |
| ----------- | -------- | --------------------------------------------------- |
| trustedHtml | `string` | `html` string which needs to be implicitly trusted. |

## returns

a `html` which has been branded to be implicitly trusted.
