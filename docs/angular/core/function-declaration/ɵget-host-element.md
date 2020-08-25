---
kind: FunctionDeclaration
name: ɵgetHostElement
module: core
---

# ɵgetHostElement

## description

Retrieves the host element of a component or directive instance.
The host element is the DOM element that matched the selector of the directive.

```ts
function getHostElement(componentOrDirective: {}): Element;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/util/discovery_utils.ts#L253-L255)

## Parameters

| Name                 | Type | Description                                        |
| -------------------- | ---- | -------------------------------------------------- |
| componentOrDirective | `{}` | Component or directive instance for which the host |

## returns

Host element of the target.

## publicApi

## globalApi

ng
