---
kind: FunctionDeclaration
name: ɵɵstyleMapInterpolateV
module: core
---

# ɵɵstyleMapInterpolateV

## description

Update an interpolated style on an element with 9 or more bound values surrounded by text.

Used when the number of interpolated values exceeds 8.

```html
<div
  class="key: {{v0}}; key1: {{v1}}; key2: {{v2}}; key3: {{v3}}; key4: {{v4}}; key5: {{v5}};
key6: {{v6}}; key7: {{v7}}; key8: {{v8}}; key9: {{v9}}suffix"
></div>
```

Its compiled representation is:

```ts
ɵɵstyleMapInterpolateV([
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
  "; key5: ",
  v5,
  "; key6: ",
  v6,
  "; key7: ",
  v7,
  "; key8: ",
  v8,
  "; key9: ",
  v9,
  "suffix",
]);
```

```ts
function ɵɵstyleMapInterpolateV(values: any[]): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/style_map_interpolation.ts#L339-L343)

## Parameters

| Name   | Type    | Description                                                                      |
| ------ | ------- | -------------------------------------------------------------------------------- |
| values | `any[]` | The collection of values and the strings in-between those values, beginning with |

## codeGenApi
