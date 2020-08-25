---
kind: FunctionDeclaration
name: ɵɵtextInterpolate2
module: core
---

# ɵɵtextInterpolate2

## description

Update text content with 2 bound values surrounded by other text.

Used when a text node has 2 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate2("prefix", v0, "-", v1, "suffix");
```

```ts
function ɵɵtextInterpolate2(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  suffix: string
): typeof ɵɵtextInterpolate2;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L89-L97)

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
| i0     | `string` |             |
| v1     | `any`    |             |
| suffix | `string` |             |
