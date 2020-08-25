---
kind: FunctionDeclaration
name: ɵɵsanitizeHtml
module: core
---

# ɵɵsanitizeHtml

## description

An `html` sanitizer which converts untrusted `html` **string** into trusted string by removing
dangerous content.

This method parses the `html` and locates potentially dangerous content (such as urls and
javascript) and removes it.

It is possible to mark a string as trusted by calling {@link bypassSanitizationTrustHtml}.

```ts
function ɵɵsanitizeHtml(unsafeHtml: any): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/sanitization.ts#L37-L46)

## Parameters

| Name       | Type  | Description                                |
| ---------- | ----- | ------------------------------------------ |
| unsafeHtml | `any` | untrusted `html`, typically from the user. |

## returns

`html` string which is safe to display to user, because all of the dangerous javascript
and urls have been removed.

## publicApi
