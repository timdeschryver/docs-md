---
kind: InterfaceDeclaration
name: ParseTemplateOptions
module: compiler
---

# ParseTemplateOptions

## description

Options that can be used to modify how a template is parsed by `parseTemplate()`.

```ts
interface ParseTemplateOptions {
  preserveWhitespaces?: boolean;
  interpolationConfig?: InterpolationConfig;
  range?: LexerRange;
  escapedString?: boolean;
  leadingTriviaChars?: string[];
  enableI18nLegacyMessageIdFormat?: boolean;
  i18nNormalizeLineEndingsInICUs?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/template.ts#L1935-L1998)

## Properties

| Name                                                          | Type                  | Description                                                                                |
| ------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| preserveWhitespaces                                           | `boolean`             | Include whitespace nodes in the parsed output.                                             |
| interpolationConfig                                           | `InterpolationConfig` | How to parse interpolation markers.                                                        |
| range                                                         | `LexerRange`          | The start and end point of the text to parse within the `source` string.                   |
| The entire `source` string is parsed if this is not provided. |
| escapedString                                                 | `boolean`             | If this text is stored in a JavaScript string, then we have to deal with escape sequences. |

**Example 1:**

```
"abc\"def\nghi"
```

- The `\"` must be converted to `"`.
- The `\n` must be converted to a new line character in a token,
  but it should not increment the current line for source mapping.

**Example 2:**

```
"abc\
def"
```

The line continuation (`\` followed by a newline) should be removed from a token
but the new line should increment the current line for source mapping. |
| leadingTriviaChars | `string[]` | An array of characters that should be considered as leading trivia.
Leading trivia are characters that are not important to the developer, and so should not be
included in source-map segments. A common example is whitespace. |
| enableI18nLegacyMessageIdFormat | `boolean` | Render `$localize` message ids with additional legacy message ids.

This option defaults to `true` but in the future the defaul will be flipped.

For now set this option to false if you have migrated the translation files to use the new
`$localize` message id format and you are not using compile time translation merging. |
| i18nNormalizeLineEndingsInICUs | `boolean` | If this text is stored in an external template (e.g. via `templateUrl`) then we need to decide
whether or not to normalize the line-endings (from `\r\n` to `\n`) when processing ICU
expressions.

If `true` then we will normalize ICU expression line endings.
The default is `false`, but this will be switched in a future major release. |
