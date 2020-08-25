---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolate5
module: core
---

# ɵɵstyleMapInterpolate5

## description

Update an interpolated style on an element with 5 bound values surrounded by text.

Used when the value passed to a property has 5 interpolated values in it:

```html
<div
  style="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}suffix"
></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolate5(
  "key: ",
  v0,
  "; key1: ",
  v1,
  "; key2: ",
  v2,
  "; key3: ",
  v3,
  "; key4: ",
  v4,
  "suffix"
);
```

```ts
function ɵɵstyleMapInterpolate5(
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
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L170-L177)

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
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
