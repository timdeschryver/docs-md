---
kind: FunctionDeclaration
name: ɵɵnextContext
module: core
---

# ɵɵnextContext

## description

Retrieves a context at the level specified and saves it as the global, contextViewData.
Will get the next level up if level is not specified.

This is used to save contexts of parent views so they can be bound in embedded views, or
in conjunction with reference() to bind a ref from a parent view.

```ts
function ɵɵnextContext<T = any>(level: number = 1): T;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/next_context.ts#L22-L24)

## Parameters

| Name  | Type     | Description                                                                          |
| ----- | -------- | ------------------------------------------------------------------------------------ |
| level | `number` | The relative level of the view from which to grab context compared to contextVewData |

## returns

context

## codeGenApi
