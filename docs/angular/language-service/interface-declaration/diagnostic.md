---
kind: InterfaceDeclaration
name: Diagnostic
module: language-service
---

# Diagnostic

## description

An template diagnostic message to display.

```ts
interface Diagnostic {
  kind: ts.DiagnosticCategory;
  span: Span;
  message: string | DiagnosticMessageChain;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/language-service/src/types.ts#L228-L243)

## publicApi

## Properties

| Name    | Type    | Description                                 |
| ------- | ------- | ------------------------------------------- |
| kind    | `any`   | The kind of diagnostic message              |
| span    | `Span`  | The source span that should be highlighted. |
| message | `string | DiagnosticMessageChain`                     | The text of the diagnostic message to display or a chain of messages. |
