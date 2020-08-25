---
kind: FunctionDeclaration
name: ɵɵtextInterpolate3
module: core
---

# ɵɵtextInterpolate3

## description

Update text content with 3 bound values surrounded by other text.

Used when a text node has 3 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}-{{v2}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate3("prefix", v0, "-", v1, "-", v2, "suffix");
```

```ts
function ɵɵtextInterpolate3(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  suffix: string
): typeof ɵɵtextInterpolate3;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L119-L128)

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
| i1     | `string` |             |
| v2     | `any`    |             |
| suffix | `string` |             |
