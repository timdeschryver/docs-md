---
kind: ClassDeclaration
name: ɵRender3NgModuleRef
module: core
---

# ɵRender3NgModuleRef

```ts
class NgModuleRef<T>
  extends viewEngine_NgModuleRef<T>
  implements InternalNgModuleRef<T> {
  _bootstrapComponents: Type<any>[] = [];
  _r3Injector: R3Injector;
  injector: Injector = this;
  instance: T;
  destroyCbs: (() => void)[] | null = [];
  readonly componentFactoryResolver: ComponentFactoryResolver = new ComponentFactoryResolver(
    this
  );

  get(
    token: any,
    notFoundValue: any = Injector.THROW_IF_NOT_FOUND,
    injectFlags: InjectFlags = InjectFlags.Default
  ): any;
  destroy(): void;
  onDestroy(callback: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/ng_module_ref.ts#L30-L94)

## Properties

| Name                     | Type                       | Description |
| ------------------------ | -------------------------- | ----------- |
| \_bootstrapComponents    | `Type<any>[]`              |             |
| \_r3Injector             | `R3Injector`               |             |
| injector                 | `Injector`                 |             |
| instance                 | `T`                        |             |
| destroyCbs               | `(() => void)[]`           |             |
| componentFactoryResolver | `ComponentFactoryResolver` |             |

## Methods

### get

```ts
get(token: any, notFoundValue: any = Injector.THROW_IF_NOT_FOUND,   injectFlags: InjectFlags = InjectFlags.Default): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/ng_module_ref.ts#L75-L81)

#### Parameters (#get-parameters)

| Name          | Type          | Description |
| ------------- | ------------- | ----------- |
| token         | `any`         |             |
| notFoundValue | `any`         |             |
| injectFlags   | `InjectFlags` |             |

### destroy

```ts
destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/ng_module_ref.ts#L83-L89)

### onDestroy

```ts
onDestroy(callback: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/ng_module_ref.ts#L90-L93)

#### Parameters (#onDestroy-parameters)

| Name     | Type         | Description |
| -------- | ------------ | ----------- |
| callback | `() => void` |             |
