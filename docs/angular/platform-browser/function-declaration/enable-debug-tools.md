---
kind: FunctionDeclaration
name: enableDebugTools
module: platform-browser
---

# enableDebugTools

## description

Enabled Angular debug tools that are accessible via your browser's
developer console.

Usage:

1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
1. Type `ng.` (usually the console will show auto-complete suggestion)
1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
   then hit Enter.

```ts
function enableDebugTools<T>(ref: ComponentRef<T>): ComponentRef<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/platform-browser/src/browser/tools/tools.ts#L28-L31)

## publicApi

## Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| ref  | `any` |             |
