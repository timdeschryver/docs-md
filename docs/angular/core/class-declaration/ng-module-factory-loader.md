---
kind: ClassDeclaration
name: NgModuleFactoryLoader
module: core
---

# NgModuleFactoryLoader

## description

Used to load ng module factories.

```ts
class NgModuleFactoryLoader {
  abstract load(path: string): Promise<NgModuleFactory<any>>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory_loader.ts#L22-L24)

## publicApi

## deprecated

the `string` form of `loadChildren` is deprecated, and `NgModuleFactoryLoader` is
part of its implementation. See `LoadChildren` for more details.

## Methods

### load

```ts
abstract load(path: string): Promise<NgModuleFactory<any>>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory_loader.ts#L23-L23)

#### Parameters (#load-parameters)

| Name | Type     | Description |
| ---- | -------- | ----------- |
| path | `string` |             |
