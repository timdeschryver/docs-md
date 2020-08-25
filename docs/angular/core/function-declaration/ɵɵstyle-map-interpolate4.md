---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolate4
module: core
---

# ɵɵstyleMapInterpolate4

## description

Update an interpolated style on an element with 4 bound values surrounded by text.

Used when the value passed to a property has 4 interpolated values in it:

```html
<div style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolate4(
  "key: ",
  v0,
  "; key1: ",
  v1,
  "; key2: ",
  v2,
  "; key3: ",
  v3,
  "suffix"
);
```

```ts
function ɵɵstyleMapInterpolate4(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  i2: string,
  v3: any,
  suffix: string
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L132-L138)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| i0     | `string` | Static value used for concatenation only. |
| v1     | `any`    | Value checked for change.                 |
| i1     | `string` | Static value used for concatenation only. |
| v2     | `any`    | Value checked for change.                 |
| i2     | `string` | Static value used for concatenation only. |
| v3     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
