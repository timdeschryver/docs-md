---
kind: ClassDeclaration
name: NgElement
module: elements
---

# NgElement

## description

Implements the functionality needed for a custom element.

```ts
class NgElement extends HTMLElement {
  abstract attributeChangedCallback(
    attrName: string,
    oldValue: string | null,
    newValue: string,
    namespace?: string
  ): void;
  abstract connectedCallback(): void;
  abstract disconnectedCallback(): void;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L42-L73)

## publicApi

## Methods

### attributeChangedCallback

#### description (#attributeChangedCallback-description)

Prototype for a handler that responds to a change in an observed attribute.

```ts
abstract attributeChangedCallback(   attrName: string, oldValue: string|null, newValue: string, namespace?: string): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L61-L62)

#### Parameters (#attributeChangedCallback-parameters)

| Name      | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| attrName  | `string` | The name of the attribute that has changed.      |
| oldValue  | `string` | The previous value of the attribute.             |
| newValue  | `string` | The new value of the attribute.                  |
| namespace | `string` | The namespace in which the attribute is defined. |

#### returns (#attributeChangedCallback-returns)

Nothing.

### connectedCallback

#### description (#connectedCallback-description)

Prototype for a handler that responds to the insertion of the custom element in the DOM.

```ts
abstract connectedCallback(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L67-L67)

#### returns (#connectedCallback-returns)

Nothing.

### disconnectedCallback

#### description (#disconnectedCallback-description)

Prototype for a handler that responds to the deletion of the custom element from the DOM.

```ts
abstract disconnectedCallback(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L72-L72)

#### returns (#disconnectedCallback-returns)

Nothing.
