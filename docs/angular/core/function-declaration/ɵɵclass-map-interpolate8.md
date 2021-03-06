---
kind: FunctionDeclaration
name: ɵɵclassMapInterpolate8
module: core
---

# ɵɵclassMapInterpolate8

## description

Update an interpolated class on an element with 8 bound values surrounded by text.

Used when the value passed to a property has 8 interpolated values in it:

```html
<div
  class="prefix{{v0}}-{{v1}}-{{v2}}-{{v3}}-{{v4}}-{{v5}}-{{v6}}-{{v7}}suffix"
></div>
```

Its compiled representation is:

```ts
ɵɵclassMapInterpolate8(
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
  "-",
  v7,
  "suffix"
);
```

```ts
function ɵɵclassMapInterpolate8(
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
  i6: string,
  v7: any,
  suffix: string
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/class_map_interpolation.ts#L301-L309)

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
| i3     | `string` | Static value used for concatenation only. |
| v4     | `any`    | Value checked for change.                 |
| i4     | `string` | Static value used for concatenation only. |
| v5     | `any`    | Value checked for change.                 |
| i5     | `string` | Static value used for concatenation only. |
| v6     | `any`    | Value checked for change.                 |
| i6     | `string` | Static value used for concatenation only. |
| v7     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
