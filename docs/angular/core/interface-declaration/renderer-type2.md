---
kind: InterfaceDeclaration
name: RendererType2
module: core
---

# RendererType2

## description

Used by `RendererFactory2` to associate custom rendering data and styles
with a rendering implementation.

```ts
interface RendererType2 {
  id: string;
  encapsulation: ViewEncapsulation;
  styles: (string | any[])[];
  data: { [kind: string]: any };
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L22-L48)

## publicApi

## Properties

| Name                             | Type                | Description                                                             |
| -------------------------------- | ------------------- | ----------------------------------------------------------------------- |
| id                               | `string`            | A unique identifying string for the new renderer, used when creating    |
| unique styles for encapsulation. |
| encapsulation                    | `ViewEncapsulation` | The view encapsulation type, which determines how styles are applied to |

DOM elements. One of

- `Emulated` (default): Emulate native scoping of styles.
- `Native`: Use the native encapsulation mechanism of the renderer.
- `ShadowDom`: Use modern [Shadow
  DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
  create a ShadowRoot for component's host element.
- `None`: Do not provide any template or style encapsulation. |
  | styles | `(string | any[])[]` | Defines CSS styles to be stored on a renderer instance. |
  | data | `{ [kind: string]: any; }` | Defines arbitrary developer-defined data to be stored on a renderer instance.
  This is useful for renderers that delegate to other renderers. |
