---
kind: ClassDeclaration
name: Renderer2
module: core
---

# Renderer2

## description

Extend this base class to implement custom rendering. By default, Angular
renders a template into DOM. You can use custom rendering to intercept
rendering calls, or to render to something other than DOM.

Create your custom renderer using `RendererFactory2`.

Use a custom renderer to bypass Angular's templating and
make custom UI changes that can't be expressed declaratively.
For example if you need to set a property or an attribute whose name is
not statically known, use the `setProperty()` or
`setAttribute()` method.

```ts
class Renderer2 {
  destroyNode!: ((node: any) => void) | null;
  static __NG_ELEMENT_ID__: () => Renderer2 = () => SWITCH_RENDERER2_FACTORY();

  abstract destroy(): void;
  abstract createElement(name: string, namespace?: string | null): any;
  abstract createComment(value: string): any;
  abstract createText(value: string): any;
  abstract appendChild(parent: any, newChild: any): void;
  abstract insertBefore(parent: any, newChild: any, refChild: any): void;
  abstract removeChild(
    parent: any,
    oldChild: any,
    isHostElement?: boolean
  ): void;
  abstract selectRootElement(
    selectorOrNode: string | any,
    preserveContent?: boolean
  ): any;
  abstract parentNode(node: any): any;
  abstract nextSibling(node: any): any;
  abstract setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null
  ): void;
  abstract removeAttribute(
    el: any,
    name: string,
    namespace?: string | null
  ): void;
  abstract addClass(el: any, name: string): void;
  abstract removeClass(el: any, name: string): void;
  abstract setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void;
  abstract removeStyle(
    el: any,
    style: string,
    flags?: RendererStyleFlags2
  ): void;
  abstract setProperty(el: any, name: string, value: any): void;
  abstract setValue(node: any, value: string): void;
  abstract listen(
    target: "window" | "document" | "body" | any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L111-L281)

## publicApi

## Properties

| Name                                                            | Type                  | Description                                          |
| --------------------------------------------------------------- | --------------------- | ---------------------------------------------------- |
| destroyNode                                                     | `(node: any) => void` | If null or undefined, the view engine won't call it. |
| This is used as a performance optimization for production mode. |
| **NG_ELEMENT_ID**                                               | `() => Renderer2`     |                                                      |

## Methods

### destroy

#### description (#destroy-description)

Implement this callback to destroy the renderer or the host element.

```ts
abstract destroy(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L122-L122)

### createElement

#### description (#createElement-description)

Implement this callback to create an instance of the host element.

```ts
abstract createElement(name: string, namespace?: string|null): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L129-L129)

#### Parameters (#createElement-parameters)

| Name      | Type     | Description                                                           |
| --------- | -------- | --------------------------------------------------------------------- |
| name      | `string` | An identifying name for the new element, unique within the namespace. |
| namespace | `string` | The namespace for the new element.                                    |

#### returns (#createElement-returns)

The new element.

### createComment

#### description (#createComment-description)

Implement this callback to add a comment to the DOM of the host element.

```ts
abstract createComment(value: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L135-L135)

#### Parameters (#createComment-parameters)

| Name  | Type     | Description       |
| ----- | -------- | ----------------- |
| value | `string` | The comment text. |

#### returns (#createComment-returns)

The modified element.

### createText

#### description (#createText-description)

Implement this callback to add text to the DOM of the host element.

```ts
abstract createText(value: string): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L142-L142)

#### Parameters (#createText-parameters)

| Name  | Type     | Description      |
| ----- | -------- | ---------------- |
| value | `string` | The text string. |

#### returns (#createText-returns)

The modified element.

### appendChild

#### description (#appendChild-description)

Appends a child to a given parent node in the host element DOM.

```ts
abstract appendChild(parent: any, newChild: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L154-L154)

#### Parameters (#appendChild-parameters)

| Name     | Type  | Description         |
| -------- | ----- | ------------------- |
| parent   | `any` | The parent node.    |
| newChild | `any` | The new child node. |

### insertBefore

#### description (#insertBefore-description)

Implement this callback to insert a child node at a given position in a parent node
in the host element DOM.

```ts
abstract insertBefore(parent: any, newChild: any, refChild: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L162-L162)

#### Parameters (#insertBefore-parameters)

| Name     | Type  | Description                                                  |
| -------- | ----- | ------------------------------------------------------------ |
| parent   | `any` | The parent node.                                             |
| newChild | `any` | The new child nodes.                                         |
| refChild | `any` | The existing child node before which `newChild` is inserted. |

### removeChild

#### description (#removeChild-description)

Implement this callback to remove a child node from the host element's DOM.

```ts
abstract removeChild(parent: any, oldChild: any, isHostElement?: boolean): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L170-L170)

#### Parameters (#removeChild-parameters)

| Name          | Type      | Description                                                              |
| ------------- | --------- | ------------------------------------------------------------------------ |
| parent        | `any`     | The parent node.                                                         |
| oldChild      | `any`     | The child node to remove.                                                |
| isHostElement | `boolean` | Optionally signal to the renderer whether this element is a host element |

### selectRootElement

#### description (#selectRootElement-description)

Implement this callback to prepare an element to be bootstrapped
as a root element, and return the element instance.

```ts
abstract selectRootElement(selectorOrNode: string|any, preserveContent?: boolean): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L181-L181)

#### Parameters (#selectRootElement-parameters)

| Name            | Type      | Description                              |
| --------------- | --------- | ---------------------------------------- |
| selectorOrNode  | `any`     | The DOM element.                         |
| preserveContent | `boolean` | Whether the contents of the root element |

#### returns (#selectRootElement-returns)

The root element.

### parentNode

#### description (#parentNode-description)

Implement this callback to get the parent of a given node
in the host element's DOM.

```ts
abstract parentNode(node: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L191-L191)

#### Parameters (#parentNode-parameters)

| Name | Type  | Description              |
| ---- | ----- | ------------------------ |
| node | `any` | The child node to query. |

#### returns (#parentNode-returns)

The parent node, or null if there is no parent.
For WebWorkers, always returns true.
This is because the check is synchronous,
and the caller can't rely on checking for null.

### nextSibling

#### description (#nextSibling-description)

Implement this callback to get the next sibling node of a given node
in the host element's DOM.

```ts
abstract nextSibling(node: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L200-L200)

#### returns (#nextSibling-returns)

The sibling node, or null if there is no sibling.
For WebWorkers, always returns a value.
This is because the check is synchronous,
and the caller can't rely on checking for null.

#### Parameters (#nextSibling-parameters)

| Name | Type  | Description |
| ---- | ----- | ----------- |
| node | `any` |             |

### setAttribute

#### description (#setAttribute-description)

Implement this callback to set an attribute value for an element in the DOM.

```ts
abstract setAttribute(el: any, name: string, value: string, namespace?: string|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L208-L208)

#### Parameters (#setAttribute-parameters)

| Name      | Type     | Description         |
| --------- | -------- | ------------------- |
| el        | `any`    | The element.        |
| name      | `string` | The attribute name. |
| value     | `string` | The new value.      |
| namespace | `string` | The namespace.      |

### removeAttribute

#### description (#removeAttribute-description)

Implement this callback to remove an attribute from an element in the DOM.

```ts
abstract removeAttribute(el: any, name: string, namespace?: string|null): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L216-L216)

#### Parameters (#removeAttribute-parameters)

| Name      | Type     | Description         |
| --------- | -------- | ------------------- |
| el        | `any`    | The element.        |
| name      | `string` | The attribute name. |
| namespace | `string` | The namespace.      |

### addClass

#### description (#addClass-description)

Implement this callback to add a class to an element in the DOM.

```ts
abstract addClass(el: any, name: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L222-L222)

#### Parameters (#addClass-parameters)

| Name | Type     | Description     |
| ---- | -------- | --------------- |
| el   | `any`    | The element.    |
| name | `string` | The class name. |

### removeClass

#### description (#removeClass-description)

Implement this callback to remove a class from an element in the DOM.

```ts
abstract removeClass(el: any, name: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L229-L229)

#### Parameters (#removeClass-parameters)

| Name | Type     | Description     |
| ---- | -------- | --------------- |
| el   | `any`    | The element.    |
| name | `string` | The class name. |

### setStyle

#### description (#setStyle-description)

Implement this callback to set a CSS style for an element in the DOM.

```ts
abstract setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L238-L238)

#### Parameters (#setStyle-parameters)

| Name  | Type                  | Description                                              |
| ----- | --------------------- | -------------------------------------------------------- |
| el    | `any`                 | The element.                                             |
| style | `string`              | The name of the style.                                   |
| value | `any`                 | The new value.                                           |
| flags | `RendererStyleFlags2` | Flags for style variations. No flags are set by default. |

### removeStyle

#### description (#removeStyle-description)

Implement this callback to remove the value from a CSS style for an element in the DOM.

```ts
abstract removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L246-L246)

#### Parameters (#removeStyle-parameters)

| Name  | Type                  | Description                                       |
| ----- | --------------------- | ------------------------------------------------- |
| el    | `any`                 | The element.                                      |
| style | `string`              | The name of the style.                            |
| flags | `RendererStyleFlags2` | Flags for style variations to remove, if set. ??? |

### setProperty

#### description (#setProperty-description)

Implement this callback to set the value of a property of an element in the DOM.

```ts
abstract setProperty(el: any, name: string, value: any): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L254-L254)

#### Parameters (#setProperty-parameters)

| Name  | Type     | Description        |
| ----- | -------- | ------------------ |
| el    | `any`    | The element.       |
| name  | `string` | The property name. |
| value | `any`    | The new value.     |

### setValue

#### description (#setValue-description)

Implement this callback to set the value of a node in the host element.

```ts
abstract setValue(node: any, value: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L261-L261)

#### Parameters (#setValue-parameters)

| Name  | Type     | Description    |
| ----- | -------- | -------------- |
| node  | `any`    | The node.      |
| value | `string` | The new value. |

### listen

#### description (#listen-description)

Implement this callback to start an event listener.

```ts
abstract listen(   target: 'window'|'document'|'body'|any, eventName: string,   callback: (event: any) => boolean | void): () => void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render/api.ts#L272-L274)

#### Parameters (#listen-parameters)

| Name      | Type                     | Description                                       |
| --------- | ------------------------ | ------------------------------------------------- |
| target    | `any`                    | The context in which to listen for events. Can be |
| eventName | `string`                 | The event to listen for.                          |
| callback  | `(event: any) => boolean | void`                                             | A handler function to invoke when the event occurs. |

#### returns (#listen-returns)

An "unlisten" function for disposing of this handler.
