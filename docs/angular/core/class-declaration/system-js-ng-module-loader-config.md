---
kind: ClassDeclaration
name: SystemJsNgModuleLoaderConfig
module: core
---

# SystemJsNgModuleLoaderConfig

## description

Configuration for SystemJsNgModuleLoader.
token.

```ts
class SystemJsNgModuleLoaderConfig {
  factoryPathPrefix!: string;
  factoryPathSuffix!: string;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/system_js_ng_module_factory_loader.ts#L30-L42)

## publicApi

## deprecated

the `string` form of `loadChildren` is deprecated, and `SystemJsNgModuleLoaderConfig`
is part of its implementation. See `LoadChildren` for more details.

## Properties

| Name              | Type     | Description                                                                          |
| ----------------- | -------- | ------------------------------------------------------------------------------------ |
| factoryPathPrefix | `string` | Prefix to add when computing the name of the factory module for a given module name. |
| factoryPathSuffix | `string` | Suffix to add when computing the name of the factory module for a given module name. |
