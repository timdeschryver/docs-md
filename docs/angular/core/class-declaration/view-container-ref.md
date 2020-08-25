---
kind: ClassDeclaration
name: ViewContainerRef
module: core
---

# ViewContainerRef

## description

Represents a container where one or more views can be attached to a component.

Can contain _host views_ (created by instantiating a
component with the `createComponent()` method), and _embedded views_
(created by instantiating a `TemplateRef` with the `createEmbeddedView()` method).

A view container instance can contain other view containers,
creating a [view hierarchy](guide/glossary#view-tree).

```ts
class ViewContainerRef {
  static __NG_ELEMENT_ID__: () => ViewContainerRef = () =>
    SWITCH_VIEW_CONTAINER_REF_FACTORY(ViewContainerRef, ElementRef);

  abstract clear(): void;
  abstract get(index: number): ViewRef | null;
  abstract createEmbeddedView<C>(
    templateRef: TemplateRef<C>,
    context?: C,
    index?: number
  ): EmbeddedViewRef<C>;
  abstract createComponent<C>(
    componentFactory: ComponentFactory<C>,
    index?: number,
    injector?: Injector,
    projectableNodes?: any[][],
    ngModule?: NgModuleRef<any>
  ): ComponentRef<C>;
  abstract insert(viewRef: ViewRef, index?: number): ViewRef;
  abstract move(viewRef: ViewRef, currentIndex: number): ViewRef;
  abstract indexOf(viewRef: ViewRef): number;
  abstract remove(index?: number): void;
  abstract detach(index?: number): ViewRef | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L35-L153)

## see

`ComponentRef`
`EmbeddedViewRef`

## publicApi

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| **NG_ELEMENT_ID** | `() => ViewContainerRef` |             |

## Methods

### clear

#### description (#clear-description)

Destroys all views in this container.

```ts
abstract clear(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L62-L62)

### get

#### description (#get-description)

Retrieves a view from this container.

```ts
abstract get(index: number): ViewRef|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L69-L69)

#### Parameters (#get-parameters)

| Name  | Type     | Description                                |
| ----- | -------- | ------------------------------------------ |
| index | `number` | The 0-based index of the view to retrieve. |

#### returns (#get-returns)

The `ViewRef` instance, or null if the index is out of range.

### createEmbeddedView

#### description (#createEmbeddedView-description)

Instantiates an embedded view and inserts it
into this container.

```ts
abstract createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C, index?: number):   EmbeddedViewRef<C>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L86-L87)

#### Parameters (#createEmbeddedView-parameters)

| Name        | Type             | Description                                                            |
| ----------- | ---------------- | ---------------------------------------------------------------------- |
| templateRef | `TemplateRef<C>` | The HTML template that defines the view.                               |
| index       | `number`         | The 0-based index at which to insert the new view into this container. |
| context     | `C`              |                                                                        |

#### returns (#createEmbeddedView-returns)

The `ViewRef` instance for the newly created view.

### createComponent

#### description (#createComponent-description)

Instantiates a single component and inserts its host view into this container.

```ts
abstract createComponent<C>(   componentFactory: ComponentFactory<C>, index?: number, injector?: Injector,   projectableNodes?: any[][], ngModule?: NgModuleRef<any>): ComponentRef<C>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L102-L104)

#### Parameters (#createComponent-parameters)

| Name             | Type                  | Description                                                                     |
| ---------------- | --------------------- | ------------------------------------------------------------------------------- |
| componentFactory | `ComponentFactory<C>` | The factory to use.                                                             |
| index            | `number`              | The index at which to insert the new component's host view into this container. |
| injector         | `Injector`            | The injector to use as the parent for the new component.                        |
| projectableNodes | `any[][]`             |                                                                                 |
| ngModule         | `NgModuleRef<any>`    |                                                                                 |

#### returns (#createComponent-returns)

The new component instance, containing the host view.

### insert

#### description (#insert-description)

Inserts a view into this container.

```ts
abstract insert(viewRef: ViewRef, index?: number): ViewRef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L114-L114)

#### Parameters (#insert-parameters)

| Name    | Type      | Description                                    |
| ------- | --------- | ---------------------------------------------- |
| viewRef | `ViewRef` | The view to insert.                            |
| index   | `number`  | The 0-based index at which to insert the view. |

#### returns (#insert-returns)

The inserted `ViewRef` instance.

### move

#### description (#move-description)

Moves a view to a new location in this container.

```ts
abstract move(viewRef: ViewRef, currentIndex: number): ViewRef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L122-L122)

#### Parameters (#move-parameters)

| Name         | Type      | Description                            |
| ------------ | --------- | -------------------------------------- |
| viewRef      | `ViewRef` | The view to move.                      |
| index        | ``        | The 0-based index of the new location. |
| currentIndex | `number`  |                                        |

#### returns (#move-returns)

The moved `ViewRef` instance.

### indexOf

#### description (#indexOf-description)

Returns the index of a view within the current container.

```ts
abstract indexOf(viewRef: ViewRef): number;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L130-L130)

#### Parameters (#indexOf-parameters)

| Name    | Type      | Description        |
| ------- | --------- | ------------------ |
| viewRef | `ViewRef` | The view to query. |

#### returns (#indexOf-returns)

The 0-based index of the view's position in this container,
or `-1` if this container doesn't contain the view.

### remove

#### description (#remove-description)

Destroys a view attached to this container

```ts
abstract remove(index?: number): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L137-L137)

#### Parameters (#remove-parameters)

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| index | `number` | The 0-based index of the view to destroy. |

### detach

#### description (#detach-description)

Detaches a view from this container without destroying it.
Use along with `insert()` to move a view within the current container.

```ts
abstract detach(index?: number): ViewRef|null;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/view_container_ref.ts#L145-L145)

#### Parameters (#detach-parameters)

| Name  | Type     | Description                              |
| ----- | -------- | ---------------------------------------- |
| index | `number` | The 0-based index of the view to detach. |
