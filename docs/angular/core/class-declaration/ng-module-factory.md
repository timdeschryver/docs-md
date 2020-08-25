---
kind: ClassDeclaration
name: NgModuleFactory
module: core
---

# NgModuleFactory

```ts
class NgModuleFactory<T> {
  abstract create(parentInjector: Injector | null): NgModuleRef<T>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory.ts#L58-L61)

## publicApi

## Methods

### create

```ts
abstract create(parentInjector: Injector|null): NgModuleRef<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/ng_module_factory.ts#L60-L60)

#### Parameters (#create-parameters)

| Name           | Type       | Description |
| -------------- | ---------- | ----------- |
| parentInjector | `Injector` |             |
