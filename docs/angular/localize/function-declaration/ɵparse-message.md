---
kind: FunctionDeclaration
name: ɵparseMessage
module: localize
---

# ɵparseMessage

## description

Parse a `$localize` tagged string into a structure that can be used for translation.

See `ParsedMessage` for an example.

```ts
function parseMessage(
  messageParts: TemplateStringsArray,
  expressions?: readonly any[],
  location?: SourceLocation
): ParsedMessage;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/messages.ts#L136-L167)

## Parameters

| Name         | Type                   | Description |
| ------------ | ---------------------- | ----------- |
| messageParts | `TemplateStringsArray` |             |
| expressions  | `readonly any[]`       |             |
| location     | `SourceLocation`       |             |
