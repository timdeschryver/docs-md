---
kind: FunctionDeclaration
name: ɵbypassSanitizationTrustStyle
module: core
---

# ɵbypassSanitizationTrustStyle

## description

Mark `style` string as trusted.

This function wraps the trusted string in `String` and brands it in a way which makes it
recognizable to {@link styleSanitizer} to be trusted implicitly.

```ts
function bypassSanitizationTrustStyle(trustedStyle: string): SafeStyle;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/bypass.ts#L152-L154)

## Parameters

| Name         | Type     | Description                                          |
| ------------ | -------- | ---------------------------------------------------- |
| trustedStyle | `string` | `style` string which needs to be implicitly trusted. |

## returns

a `style` hich has been branded to be implicitly trusted.
