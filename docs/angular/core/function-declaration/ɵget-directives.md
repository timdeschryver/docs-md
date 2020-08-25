---
kind: FunctionDeclaration
name: ɵgetDirectives
module: core
---

# ɵgetDirectives

## description

Retrieves directive instances associated with a given DOM element. Does not include
component instances.

```ts
function getDirectives(element: Element): {}[];
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/util/discovery_utils.ts#L195-L205)

## usageNotes

Given the following DOM structure:

```
<my-app>
<button my-button></button>
<my-comp></my-comp>
</my-app>
```

Calling `getDirectives` on `<button>` will return an array with an instance of the `MyButton`
directive that is associated with the DOM element.

Calling `getDirectives` on `<my-comp>` will return an empty array.

## Parameters

| Name    | Type      | Description                                  |
| ------- | --------- | -------------------------------------------- |
| element | `Element` | DOM element for which to get the directives. |

## returns

Array of directives associated with the element.

## publicApi

## globalApi

ng
