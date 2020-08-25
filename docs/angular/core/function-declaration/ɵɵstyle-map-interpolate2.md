---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolate2
module: core
---

# ɵɵstyleMapInterpolate2

## description

Update an interpolated style on an element with 2 bound values surrounded by text.

Used when the value passed to a property has 2 interpolated values in it:

```html
<div style="key: {{v0}}; key1: {{v1}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolate2("key: ", v0, "; key1: ", v1, "suffix");
```

```ts
function ɵɵstyleMapInterpolate2(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  suffix: string
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L64-L69)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| i0     | `string` | Static value used for concatenation only. |
| v1     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
