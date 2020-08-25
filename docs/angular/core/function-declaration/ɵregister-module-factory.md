---
kind: FunctionDeclaration
name: ɵregisterModuleFactory
module: core
---

# ɵregisterModuleFactory

## description

Registers a loaded module. Should only be called from generated NgModuleFactory code.

```ts
function registerModuleFactory(id: string, factory: NgModuleFactory<any>);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory_registration.ts#L29-L33)

## publicApi

## Parameters

| Name    | Type                   | Description |
| ------- | ---------------------- | ----------- |
| id      | `string`               |             |
| factory | `NgModuleFactory<any>` |             |
