---
kind: FunctionDeclaration
name: ɵtranslate
module: localize
---

# ɵtranslate

## description

Translate the text of the `$localize` tagged-string (i.e. `messageParts` and
`substitutions`) using the given `translations`.

The tagged-string is parsed to extract its `messageId` which is used to find an appropriate
`ParsedTranslation`. If this doesn't match and there are legacy ids then try matching a
translation using those.

If one is found then it is used to translate the message into a new set of `messageParts` and
`substitutions`.
The translation may reorder (or remove) substitutions as appropriate.

If there is no translation with a matching message id then an error is thrown.
If a translation contains a placeholder that is not found in the message being translated then an
error is thrown.

```ts
function translate(
  translations: Record<string, ParsedTranslation>,
  messageParts: TemplateStringsArray,
  substitutions: readonly any[]
): [TemplateStringsArray, readonly any[]];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/translations.ts#L52-L80)

## Parameters

| Name          | Type                                | Description |
| ------------- | ----------------------------------- | ----------- |
| translations  | `Record<string, ParsedTranslation>` |             |
| messageParts  | `TemplateStringsArray`              |             |
| substitutions | `readonly any[]`                    |             |
