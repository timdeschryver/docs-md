---
kind: ClassDeclaration
name: ɵRender3ComponentRef
module: core
---

# ɵRender3ComponentRef

## description

Represents an instance of a Component created via a {@link ComponentFactory}.

`ComponentRef` provides access to the Component Instance as well other objects related to this
Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
method.

```ts
class ComponentRef<T> extends viewEngine_ComponentRef<T> {
  destroyCbs: (() => void)[] | null = [];
  instance: T;
  hostView: ViewRef<T>;
  changeDetectorRef: ViewEngine_ChangeDetectorRef;
  componentType: Type<T>;

  destroy(): void;
  onDestroy(callback: () => void): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component_ref.ts#L256-L291)

## Properties

| Name              | Type                           | Description |
| ----------------- | ------------------------------ | ----------- |
| destroyCbs        | `(() => void)[]`               |             |
| instance          | `T`                            |             |
| hostView          | `ViewRef<T>`                   |             |
| changeDetectorRef | `ViewEngine_ChangeDetectorRef` |             |
| componentType     | `Type<T>`                      |             |

## Methods

### destroy

```ts
destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component_ref.ts#L278-L284)

### onDestroy

```ts
onDestroy(callback: () => void): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/component_ref.ts#L286-L290)

#### Parameters (#onDestroy-parameters)

| Name     | Type         | Description |
| -------- | ------------ | ----------- |
| callback | `() => void` |             |
