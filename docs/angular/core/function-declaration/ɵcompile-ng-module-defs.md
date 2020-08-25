---
kind: FunctionDeclaration
name: ɵcompileNgModuleDefs
module: core
---

# ɵcompileNgModuleDefs

## description

Compiles and adds the `ɵmod` and `ɵinj` properties to the module class.

It's possible to compile a module via this API which will allow duplicate declarations in its
root.

```ts
function compileNgModuleDefs(
  moduleType: NgModuleType,
  ngModule: NgModule,
  allowDuplicateDeclarationsInRoot: boolean = false
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/jit/module.ts#L101-L168)

## Parameters

| Name                             | Type                | Description |
| -------------------------------- | ------------------- | ----------- |
| moduleType                       | `NgModuleType<any>` |             |
| ngModule                         | `NgModule`          |             |
| allowDuplicateDeclarationsInRoot | `boolean`           |             |
