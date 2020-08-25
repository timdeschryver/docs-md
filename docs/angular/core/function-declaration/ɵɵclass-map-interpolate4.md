---
kind: FunctionDeclaration
name: ɵɵclassMapInterpolate4
module: core
---

# ɵɵclassMapInterpolate4

## description

Update an interpolated class on an element with 4 bound values surrounded by text.

Used when the value passed to a property has 4 interpolated values in it:

```html
<div class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵclassMapInterpolate4("prefix", v0, "-", v1, "-", v2, "-", v3, "suffix");
```

```ts
function ɵɵclassMapInterpolate4(
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

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/class_map_interpolation.ts#L134-L140)

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
