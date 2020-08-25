---
kind: FunctionDeclaration
name: ɵmakeTemplateObject
module: localize
---

# ɵmakeTemplateObject

## description

Create the specialized array that is passed to tagged-string tag functions.

```ts
function makeTemplateObject(
  cooked: string[],
  raw: string[]
): TemplateStringsArray;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/localize/src/utils/src/translations.ts#L132-L135)

## Parameters

| Name   | Type       | Description                                          |
| ------ | ---------- | ---------------------------------------------------- |
| cooked | `string[]` | The message parts with their escape codes processed. |
| raw    | `string[]` | The message parts with their escaped codes as-is.    |
