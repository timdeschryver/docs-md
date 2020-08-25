---
kind: FunctionDeclaration
name: ɵɵtextInterpolate5
module: core
---

# ɵɵtextInterpolate5

## description

Update text content with 5 bound values surrounded by other text.

Used when a text node has 5 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate5("prefix", v0, "-", v1, "-", v2, "-", v3, "-", v4, "suffix");
```

```ts
function ɵɵtextInterpolate5(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  i2: string,
  v3: any,
  i3: string,
  v4: any,
  suffix: string
): typeof ɵɵtextInterpolate5;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L181-L190)

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
| i2     | `string` |             |
| v3     | `any`    |             |
| i3     | `string` |             |
| v4     | `any`    |             |
| suffix | `string` |             |
