---
kind: ClassDeclaration
name: ɵCodegenComponentFactoryResolver
module: core
---

# ɵCodegenComponentFactoryResolver

```ts
class CodegenComponentFactoryResolver implements ComponentFactoryResolver {
  resolveComponentFactory<T>(component: {
    new (...args: any[]): T;
  }): ComponentFactory<T>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory_resolver.ts#L54-L76)

## Methods

### resolveComponentFactory

```ts
resolveComponentFactory<T>(component: {new(...args: any[]): T}): ComponentFactory<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/component_factory_resolver.ts#L66-L75)

#### Parameters (#resolveComponentFactory-parameters)

| Name      | Type                        | Description |
| --------- | --------------------------- | ----------- |
| component | `new (...args: any[]) => T` |             |
