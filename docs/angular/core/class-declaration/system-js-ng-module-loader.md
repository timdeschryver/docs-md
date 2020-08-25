---
kind: ClassDeclaration
name: SystemJsNgModuleLoader
module: core
---

# SystemJsNgModuleLoader

## description

NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory

```ts
class SystemJsNgModuleLoader implements NgModuleFactoryLoader {
  load(path: string): Promise<NgModuleFactory<any>>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/system_js_ng_module_factory_loader.ts#L55-L92)

## publicApi

## deprecated

the `string` form of `loadChildren` is deprecated, and `SystemJsNgModuleLoader` is
part of its implementation. See `LoadChildren` for more details.

## Methods

### load

```ts
load(path: string): Promise<NgModuleFactory<any>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/system_js_ng_module_factory_loader.ts#L63-L66)

#### Parameters (#load-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| path | `string` |             |
