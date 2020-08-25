---
kind: FunctionDeclaration
name: ɵɵsanitizeStyle
module: core
---

# ɵɵsanitizeStyle

## description

A `style` sanitizer which converts untrusted `style` **string** into trusted string by removing
dangerous content.

It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustStyle}.

```ts
function ɵɵsanitizeStyle(unsafeStyle: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L59-L68)

## Parameters

| Name        | Type  | Description                                 |
| ----------- | ----- | ------------------------------------------- |
| unsafeStyle | `any` | untrusted `style`, typically from the user. |

## returns

`style` string which is safe to bind to the `style` properties.

## publicApi
