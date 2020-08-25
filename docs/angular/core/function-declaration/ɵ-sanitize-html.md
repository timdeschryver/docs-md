---
kind: FunctionDeclaration
name: ɵ_sanitizeHtml
module: core
---

# ɵ_sanitizeHtml

## description

Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
the DOM in a browser environment.

```ts
function _sanitizeHtml(defaultDoc: any, unsafeHtmlInput: string): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/sanitization/html_sanitizer.ts#L245-L287)

## Parameters

| Name            | Type     | Description |
| --------------- | -------- | ----------- |
| defaultDoc      | `any`    |             |
| unsafeHtmlInput | `string` |             |
