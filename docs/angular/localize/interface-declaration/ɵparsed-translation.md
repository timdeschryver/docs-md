---
kind: InterfaceDeclaration
name: ɵParsedTranslation
module: localize
---

# ɵParsedTranslation

## description

A translation message that has been processed to extract the message parts and placeholders.

```ts
interface ParsedTranslation {
  messageParts: TemplateStringsArray;
  placeholderNames: string[];

  // inherited from MessageMetadata
  text: string;
  id?: MessageId;
  legacyIds?: string[];
  meaning?: string;
  description?: string;
  location?: SourceLocation;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/translations.ts#L15-L18)

## Properties

| Name             | Type                   | Description |
| ---------------- | ---------------------- | ----------- |
| messageParts     | `TemplateStringsArray` |             |
| placeholderNames | `string[]`             |             |
