---
kind: FunctionDeclaration
name: ɵgetInjectableDef
module: core
---

# ɵgetInjectableDef

## description

Read the injectable def (`ɵprov`) for `type` in a way which is immune to accidentally reading
inherited value.

```ts
function getInjectableDef<T>(type: any): ɵɵInjectableDef<T> | null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/defs.ts#L195-L198)

## Parameters

| Name | Type  | Description                                            |
| ---- | ----- | ------------------------------------------------------ |
| type | `any` | A type which may have its own (non-inherited) `ɵprov`. |
