---
kind: ClassDeclaration
name: RendererFactory2
module: core
---

# RendererFactory2

## description

Creates and initializes a custom renderer that implements the `Renderer2` base class.

```ts
class RendererFactory2 {
  abstract createRenderer(
    hostElement: any,
    type: RendererType2 | null
  ): Renderer2;
  abstract begin?(): void;
  abstract end?(): void;
  abstract whenRenderingDone?(): Promise<any>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L55-L76)

## publicApi

## Methods

### createRenderer

#### description (#createRenderer-description)

Creates and initializes a custom renderer for a host DOM element.

```ts
abstract createRenderer(hostElement: any, type: RendererType2|null): Renderer2;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L62-L62)

#### Parameters (#createRenderer-parameters)

| Name        | Type            | Description                  |
| ----------- | --------------- | ---------------------------- |
| hostElement | `any`           | The element to render.       |
| type        | `RendererType2` | The base class to implement. |

#### returns (#createRenderer-returns)

The new custom renderer instance.

### begin

#### description (#begin-description)

A callback invoked when rendering has begun.

```ts
abstract begin?(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L66-L66)

### end

#### description (#end-description)

A callback invoked when rendering has completed.

```ts
abstract end?(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L70-L70)

### whenRenderingDone

#### description (#whenRenderingDone-description)

Use with animations test-only mode. Notifies the test when rendering has completed.

```ts
abstract whenRenderingDone?(): Promise<any>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L75-L75)

#### returns (#whenRenderingDone-returns)

The asynchronous result of the developer-defined function.
