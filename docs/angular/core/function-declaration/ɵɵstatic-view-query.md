---
kind: FunctionDeclaration
name: ɵɵstaticViewQuery
module: core
---

# ɵɵstaticViewQuery

## description

Creates new QueryList for a static view query.

```ts
function ɵɵstaticViewQuery<T>(
  predicate: Type<any> | InjectionToken<unknown> | string[],
  descend: boolean,
  read?: any
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/query.ts#L457-L460)

## Parameters

| Name      | Type       | Description                             |
| --------- | ---------- | --------------------------------------- |
| predicate | `Type<any> | InjectionToken<unknown>                 | string[]` | The type for which the query will search |
| descend   | `boolean`  | Whether or not to descend into children |
| read      | `any`      | What to save in the query               |

## codeGenApi
