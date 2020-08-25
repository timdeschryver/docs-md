---
kind: FunctionDeclaration
name: ɵɵi18nExp
module: core
---

# ɵɵi18nExp

## description

Stores the values of the bindings during each update cycle in order to determine if we need to
update the translated nodes.

```ts
function ɵɵi18nExp<T>(value: T): typeof ɵɵi18nExp;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/i18n.ts#L1105-L1112)

## Parameters

| Name  | Type | Description         |
| ----- | ---- | ------------------- |
| value | `T`  | The binding's value |

## returns

This function returns itself so that it may be chained
(e.g. `i18nExp(ctx.name)(ctx.title)`)

## codeGenApi
