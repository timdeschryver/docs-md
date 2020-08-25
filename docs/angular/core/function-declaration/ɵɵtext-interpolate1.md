---
kind: FunctionDeclaration
name: ɵɵtextInterpolate1
module: core
---

# ɵɵtextInterpolate1

## description

Update text content with single bound value surrounded by other text.

Used when a text node has 1 interpolated value in it:

```html
<div>prefix{{v0}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate1("prefix", v0, "suffix");
```

```ts
function ɵɵtextInterpolate1(
  prefix: string,
  v0: any,
  suffix: string
): typeof ɵɵtextInterpolate1;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L60-L68)

## returns

itself, so that it may be chained.

## see

textInterpolateV

## codeGenApi

## Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| prefix | `string` |             |
| v0     | `any`    |             |
| suffix | `string` |             |
