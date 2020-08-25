---
kind: FunctionDeclaration
name: ɵɵi18nPostprocess
module: core
---

# ɵɵi18nPostprocess

## description

Handles message string post-processing for internationalization.

Handles message string post-processing by transforming it from intermediate
format (that might contain some markers that we need to replace) to the final
form, consumable by i18nStart instruction. Post processing steps include:

1. Resolve all multi-value cases (like [�*1:1��#2:1�|�#4:1�|�5�])
2. Replace all ICU vars (like "VAR_PLURAL")
3. Replace all placeholders used inside ICUs in a form of {PLACEHOLDER}
4. Replace all ICU references with corresponding values (like �ICU_EXP_ICU_1�)
   in case multiple ICUs have the same placeholder name

```ts
function ɵɵi18nPostprocess(
  message: string,
  replacements: { [key: string]: string | string[] } = {}
): string;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/i18n.ts#L598-L688)

## Parameters

| Name         | Type                     | Description                                |
| ------------ | ------------------------ | ------------------------------------------ |
| message      | `string`                 | Raw translation string for post processing |
| replacements | `{ [key: string]: string | string[]; }`                               | Set of replacements that should be applied |

## returns

Transformed string that can be consumed by i18nStart instruction

## codeGenApi
