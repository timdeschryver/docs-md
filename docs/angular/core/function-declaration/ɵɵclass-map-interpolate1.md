---
kind: FunctionDeclaration
name: ɵɵclassMapInterpolate1
module: core
---

# ɵɵclassMapInterpolate1

## description

Update an interpolated class on an element with single bound value surrounded by text.

Used when the value passed to a property has 1 interpolated value in it:

```html
<div class="prefix{{v0}}suffix"></div>
```

Its compiled representation is:

```ts
ɵɵclassMapInterpolate1("prefix", v0, "suffix");
```

```ts
function ɵɵclassMapInterpolate1(prefix: string, v0: any, suffix: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/class_map_interpolation.ts#L37-L41)

## Parameters

| Name   | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| prefix | `string` | Static value used for concatenation only. |
| v0     | `any`    | Value checked for change.                 |
| suffix | `string` | Static value used for concatenation only. |

## codeGenApi
