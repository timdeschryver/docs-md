---
kind: FunctionDeclaration
name: createCustomElement
module: elements
---

# createCustomElement

## description

Creates a custom element class based on an Angular component.

Builds a class that encapsulates the functionality of the provided component and
uses the configuration information to provide more context to the class.
Takes the component factory's inputs and outputs to convert them to the proper
custom element API and add hooks to input changes.

The configuration's injector is the initial injector set on the class,
and used by default for each created instance.This behavior can be overridden with the
static property to affect all newly created instances, or as a constructor argument for
one-off creations.

```ts
function createCustomElement<P>(
  component: Type<any>,
  config: NgElementConfig
): NgElementConstructor<P>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L125-L251)

## Parameters

| Name      | Type              | Description                                                                    |
| --------- | ----------------- | ------------------------------------------------------------------------------ |
| component | `any`             | The component to transform.                                                    |
| config    | `NgElementConfig` | A configuration that provides initialization information to the created class. |

## returns

The custom-element construction class, which can be registered with
a browser's `CustomElementRegistry`.

## publicApi
