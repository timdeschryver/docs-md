---
kind: InterfaceDeclaration
name: NgElementConstructor
module: elements
---

# NgElementConstructor

## description

Prototype for a class constructor based on an Angular component
that can be used for custom element registration. Implemented and returned
by the {@link createCustomElement createCustomElement() function}.

```ts
interface NgElementConstructor<P> {
  readonly observedAttributes: string[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L23-L35)

## publicApi

## Properties

| Name                                                                    | Type       | Description                                                  |
| ----------------------------------------------------------------------- | ---------- | ------------------------------------------------------------ |
| observedAttributes                                                      | `string[]` | An array of observed attribute names for the custom element, |
| derived by transforming input property names from the source component. |
