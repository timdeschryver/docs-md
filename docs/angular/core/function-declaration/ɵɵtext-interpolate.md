---
kind: FunctionDeclaration
name: ɵɵtextInterpolate
module: core
---

# ɵɵtextInterpolate

## description

Update text content with a lone bound value

Used when a text node has 1 interpolated value in it, an no additional text
surrounds that interpolated value:

```html
<div>{{v0}}</div>
```

Its compiled representation is:

```ts
ɵɵtextInterpolate(v0);
```

```ts
function ɵɵtextInterpolate(v0: any): typeof ɵɵtextInterpolate;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/text_interpolation.ts#L35-L38)

## returns

itself, so that it may be chained.

## see

textInterpolateV

## codeGenApi

## Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| v0   | `any` |             |
