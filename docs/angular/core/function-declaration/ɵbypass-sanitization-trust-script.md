---
kind: FunctionDeclaration
name: ɵbypassSanitizationTrustScript
module: core
---

# ɵbypassSanitizationTrustScript

## description

Mark `script` string as trusted.

This function wraps the trusted string in `String` and brands it in a way which makes it
recognizable to {@link scriptSanitizer} to be trusted implicitly.

```ts
function bypassSanitizationTrustScript(trustedScript: string): SafeScript;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L164-L166)

## Parameters

| Name          | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| trustedScript | `string` | `script` string which needs to be implicitly trusted. |

## returns

a `script` which has been branded to be implicitly trusted.
