---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolate3
module: core
---

# ɵɵstyleMapInterpolate3

## description

Update an interpolated style on an element with 3 bound values surrounded by text.

Used when the value passed to a property has 3 interpolated values in it:

```html
<div style="key: {{v0}}; key2: {{v1}}; key2: {{v2}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolate3("key: ", v0, "; key1: ", v1, "; key2: ", v2, "suffix");
```

```ts
function ɵɵstyleMapInterpolate3(
  prefix: string,
  v0: any,
  i0: string,
  v1: any,
  i1: string,
  v2: any,
  suffix: string
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L97-L102)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| i0     | `string` | Static value used for concatenation only. |
| v1     | `any`    | Value checked for change.                 |
| i1     | `string` | Static value used for concatenation only. |
| v2     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
