---
kind: FunctionDeclaration
name: ɵɵtextInterpolate4
module: core
---

# ɵɵtextInterpolate4

## description

Update text content with 4 bound values surrounded by other text.

Used when a text node has 4 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate4("prefix", v0, "-", v1, "-", v2, "-", v3, "suffix");
```

```ts
function ɵɵtextInterpolate4(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  i2: string,
  v3: any,
  suffix: string
): typeof ɵɵtextInterpolate4;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L150-L159)

## returns

itself, so that it may be chained.

## see

ɵɵtextInterpolateV

## codeGenApi

## Parameters

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| prefix | `string` |             |
| v0     | `any`    |             |
| i0     | `string` |             |
| v1     | `any`    |             |
| i1     | `string` |             |
| v2     | `any`    |             |
| i2     | `string` |             |
| v3     | `any`    |             |
| suffix | `string` |             |
