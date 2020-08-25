---
kind: InterfaceDeclaration
name: NgElementConfig
module: elements
---

# NgElementConfig

## description

A configuration that initializes an NgElementConstructor with the
dependencies and strategy it needs to transform a component into
a custom element class.

```ts
interface NgElementConfig {
  injector: Injector;
  strategyFactory?: NgElementStrategyFactory;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/elements/src/create-custom-element.ts#L93-L103)

## publicApi

## Properties

| Name                                                       | Type                       | Description                                                        |
| ---------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------ |
| injector                                                   | `any`                      | The injector to use for retrieving the component's factory.        |
| strategyFactory                                            | `NgElementStrategyFactory` | An optional custom strategy factory to use instead of the default. |
| The strategy controls how the transformation is performed. |
