---
kind: ClassDeclaration
name: ɵRender3ComponentFactory
module: core
---

# ɵRender3ComponentFactory

## description

Render3 implementation of {@link viewEngine_ComponentFactory}.

```ts
class ComponentFactory<T> extends viewEngine_ComponentFactory<T> {
  selector: string;
  componentType: Type<any>;
  ngContentSelectors: string[];
  isBoundToModule: boolean;

  create(
    injector: Injector,
    projectableNodes?: any[][] | undefined,
    rootSelectorOrNode?: any,
    ngModule?: viewEngine_NgModuleRef<any> | undefined
  ): viewEngine_ComponentRef<T>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component_ref.ts#L106-L233)

## Properties

| Name               | Type        | Description |
| ------------------ | ----------- | ----------- |
| selector           | `string`    |             |
| componentType      | `Type<any>` |             |
| ngContentSelectors | `string[]`  |             |
| isBoundToModule    | `boolean`   |             |

## Methods

### create

```ts
create(   injector: Injector, projectableNodes?: any[][]|undefined, rootSelectorOrNode?: any,   ngModule?: viewEngine_NgModuleRef<any>|undefined): viewEngine_ComponentRef<T>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component_ref.ts#L134-L232)

#### Parameters (#create-parameters)

| Name               | Type                          | Description |
| ------------------ | ----------------------------- | ----------- |
| injector           | `Injector`                    |             |
| projectableNodes   | `any[][]`                     |             |
| rootSelectorOrNode | `any`                         |             |
| ngModule           | `viewEngine_NgModuleRef<any>` |             |
