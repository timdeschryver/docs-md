---
kind: FunctionDeclaration
name: isDevMode
module: core
---

# isDevMode

## description

Returns whether Angular is in development mode. After called once,
the value is locked and won't change any more.

By default, this is true, unless a user calls `enableProdMode` before calling this.

```ts
function isDevMode(): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/util/is_dev_mode.ts#L28-L31)

## publicApi
