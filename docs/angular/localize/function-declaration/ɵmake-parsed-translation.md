---
kind: FunctionDeclaration
name: ɵmakeParsedTranslation
module: localize
---

# ɵmakeParsedTranslation

## description

Create a `ParsedTranslation` from a set of `messageParts` and `placeholderNames`.

```ts
function makeParsedTranslation(
  messageParts: string[],
  placeholderNames: string[] = []
): ParsedTranslation;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/translations.ts#L113-L124)

## Parameters

| Name             | Type       | Description                                                              |
| ---------------- | ---------- | ------------------------------------------------------------------------ |
| messageParts     | `string[]` | The message parts to appear in the ParsedTranslation.                    |
| placeholderNames | `string[]` | The names of the placeholders to intersperse between the `messageParts`. |
