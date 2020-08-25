---
kind: FunctionDeclaration
name: ɵpublishGlobalUtil
module: core
---

# ɵpublishGlobalUtil

## description

Publishes the given function to `window.ng` so that it can be
used from the browser console when an application is not in production.

```ts
function publishGlobalUtil(name: string, fn: Function): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/util/global_utils.ts#L63-L79)

## Parameters

| Name | Type       | Description |
| ---- | ---------- | ----------- |
| name | `string`   |             |
| fn   | `Function` |             |
