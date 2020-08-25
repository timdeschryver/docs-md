---
kind: FunctionDeclaration
name: ɵcompileNgModule
module: core
---

# ɵcompileNgModule

## description

Compiles a module in JIT mode.

This function automatically gets called when a class has a `@NgModule` decorator.

```ts
function compileNgModule(moduleType: Type<any>, ngModule: NgModule = {}): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/module.ts#L85-L93)

## Parameters

| Name       | Type        | Description |
| ---------- | ----------- | ----------- |
| moduleType | `Type<any>` |             |
| ngModule   | `NgModule`  |             |
