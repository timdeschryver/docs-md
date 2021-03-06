---
kind: FunctionDeclaration
name: ɵɵtextInterpolate7
module: core
---

# ɵɵtextInterpolate7

## description

Update text content with 7 bound values surrounded by other text.

Used when a text node has 7 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate7(
  "prefix",
  v0,
  "-",
  v1,
  "-",
  v2,
  "-",
  v3,
  "-",
  v4,
  "-",
  v5,
  "-",
  v6,
  "suffix"
);
```

```ts
function ɵɵtextInterpolate7(
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
  i4: string,
  v5: any,
  i5: string,
  v6: any,
  suffix: string
): typeof ɵɵtextInterpolate7;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L246-L257)

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
| i4     | `string` |             |
| v5     | `any`    |             |
| i5     | `string` |             |
| v6     | `any`    |             |
| suffix | `string` |             |
