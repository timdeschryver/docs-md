---
kind: FunctionDeclaration
name: ɵɵtextInterpolate6
module: core
---

# ɵɵtextInterpolate6

## description

Update text content with 6 bound values surrounded by other text.

Used when a text node has 6 interpolated values in it:

```html
<div>prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}suffix</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate6(
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
  "suffix"
);
```

```ts
function ɵɵtextInterpolate6(
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
  suffix: string
): typeof ɵɵtextInterpolate6;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L214-L224)

## Parameters

| Name   | Type     | Description                                                           |
| ------ | -------- | --------------------------------------------------------------------- |
| i4     | `string` | Static value used for concatenation only.                             |
| v5     | `any`    | Value checked for change. @returns itself, so that it may be chained. |
| prefix | `string` |                                                                       |
| v0     | `any`    |                                                                       |
| i0     | `string` |                                                                       |
| v1     | `any`    |                                                                       |
| i1     | `string` |                                                                       |
| v2     | `any`    |                                                                       |
| i2     | `string` |                                                                       |
| v3     | `any`    |                                                                       |
| i3     | `string` |                                                                       |
| v4     | `any`    |                                                                       |
| suffix | `string` |                                                                       |

## see

textInterpolateV

## codeGenApi
