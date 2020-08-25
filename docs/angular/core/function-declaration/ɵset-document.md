---
kind: FunctionDeclaration
name: ɵsetDocument
module: core
---

# ɵsetDocument

## description

Tell ivy what the `document` is for this platform.

It is only necessary to call this if the current platform is not a browser.

```ts
function setDocument(document: Document | undefined): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/document.ts#L34-L36)

## Parameters

| Name     | Type       | Description                                                        |
| -------- | ---------- | ------------------------------------------------------------------ |
| document | `Document` | The object representing the global `document` in this environment. |
