---
kind: FunctionDeclaration
name: ɵɵviewQuery
module: core
---

# ɵɵviewQuery

## description

Creates new QueryList, stores the reference in LView and returns QueryList.

```ts
function ɵɵviewQuery<T>(
  predicate: Type<any> | InjectionToken<unknown> | string[],
  descend: boolean,
  read?: any
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/query.ts#L471-L474)

## Parameters

| Name      | Type       | Description                             |
| --------- | ---------- | --------------------------------------- |
| predicate | `Type<any> | InjectionToken<unknown>                 | string[]` | The type for which the query will search |
| descend   | `boolean`  | Whether or not to descend into children |
| read      | `any`      | What to save in the query               |

## codeGenApi
