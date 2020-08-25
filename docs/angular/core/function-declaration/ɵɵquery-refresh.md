---
kind: FunctionDeclaration
name: ɵɵqueryRefresh
module: core
---

# ɵɵqueryRefresh

## description

Refreshes a query by combining matches from all active views and removing matches from deleted
views.

```ts
function ɵɵqueryRefresh(queryList: QueryList<any>): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/query.ts#L424-L446)

## returns

`true` if a query got dirty during change detection or if this is a static query
resolving in creation mode, `false` otherwise.

## codeGenApi

## Parameters

| Name      | Type             | Description |
| --------- | ---------------- | ----------- |
| queryList | `QueryList<any>` |             |
