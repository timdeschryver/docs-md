---
kind: FunctionDeclaration
name: ɵɵi18nStart
module: core
---

# ɵɵi18nStart

## description

Marks a block of text as translatable.

The instructions `i18nStart` and `i18nEnd` mark the translation block in the template.
The translation `message` is the value which is locale specific. The translation string may
contain placeholders which associate inner elements and sub-templates within the translation.

The translation `message` placeholders are:

- `�{index}(:{block})�`: _Binding Placeholder_: Marks a location where an expression will be
  interpolated into. The placeholder `index` points to the expression binding index. An optional
  `block` that matches the sub-template in which it was declared.
- `�#{index}(:{block})�`/`�/#{index}(:{block})�`: _Element Placeholder_: Marks the beginning
  and end of DOM element that were embedded in the original translation block. The placeholder
  `index` points to the element index in the template instructions set. An optional `block` that
  matches the sub-template in which it was declared.
- `�!{index}(:{block})�`/`�/!{index}(:{block})�`: _Projection Placeholder_: Marks the
  beginning and end of <ng-content> that was embedded in the original translation block.
  The placeholder `index` points to the element index in the template instructions set.
  An optional `block` that matches the sub-template in which it was declared.
- `�*{index}:{block}�`/`�/*{index}:{block}�`: _Sub-template Placeholder_: Sub-templates must be
  split up and translated separately in each angular template function. The `index` points to the
  `template` instruction index. A `block` that matches the sub-template in which it was declared.

```ts
function ɵɵi18nStart(
  index: number,
  message: string,
  subTemplateIndex?: number
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/i18n.ts#L363-L372)

## Parameters

| Name             | Type     | Description                                            |
| ---------------- | -------- | ------------------------------------------------------ |
| index            | `number` | A unique index of the translation in the static block. |
| message          | `string` | The translation message.                               |
| subTemplateIndex | `number` | Optional sub-template index in the `message`.          |

## codeGenApi
