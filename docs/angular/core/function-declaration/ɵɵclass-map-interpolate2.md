---
kind: FunctionDeclaration
name: ɵɵclassMapInterpolate2
module: core
---

# ɵɵclassMapInterpolate2

## description

Update an interpolated class on an element with 2 bound values surrounded by text.

Used when the value passed to a property has 2 interpolated values in it:

```html
<div class="prefix{{v0}}-{{v1}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵclassMapInterpolate2("prefix", v0, "-", v1, "suffix");
```

```ts
function ɵɵclassMapInterpolate2(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  suffix: string
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/class_map_interpolation.ts#L66-L71)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| i0     | `string` | Static value used for concatenation only. |
| v1     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
