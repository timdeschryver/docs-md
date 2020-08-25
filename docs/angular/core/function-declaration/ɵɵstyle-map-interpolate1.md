---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolate1
module: core
---

# ɵɵstyleMapInterpolate1

## description

Update an interpolated style on an element with single bound value surrounded by text.

Used when the value passed to a property has 1 interpolated value in it:

```html
<div style="key: {{v0}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolate1("key: ", v0, "suffix");
```

```ts
function ɵɵstyleMapInterpolate1(prefix: string, v0: any, suffix: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L35-L39)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
