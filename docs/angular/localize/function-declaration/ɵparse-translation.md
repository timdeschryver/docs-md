---
kind: FunctionDeclaration
name: ɵparseTranslation
module: localize
---

# ɵparseTranslation

## description

Parse the `messageParts` and `placeholderNames` out of a target `message`.

Used by `loadTranslations()` to convert target message strings into a structure that is more
appropriate for doing translation.

```ts
function parseTranslation(messageString: TargetMessage): ParsedTranslation;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/translations.ts#L90-L105)

## Parameters

| Name          | Type     | Description               |
| ------------- | -------- | ------------------------- |
| message       | ``       | the message to be parsed. |
| messageString | `string` |                           |
