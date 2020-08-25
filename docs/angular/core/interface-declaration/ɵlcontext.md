---
kind: InterfaceDeclaration
name: ɵLContext
module: core
---

# ɵLContext

## description

The internal view context which is specific to a given DOM element, directive or
component instance. Each value in here (besides the LView and element node details)
can be present, null or undefined. If undefined then it implies the value has not been
looked up yet, otherwise, if null, then a lookup was executed and nothing was found.

Each value will get filled when the respective value is examined within the getContext
function. The component, element and each directive instance will share the same instance
of the context.

```ts
interface LContext {
  lView: LView;
  nodeIndex: number;
  native: RNode;
  component: {} | null | undefined;
  directives: any[] | null | undefined;
  localRefs: { [key: string]: any } | null | undefined;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/interfaces/context.ts#L28-L59)

## Properties

| Name             | Type                      | Description                                                                                    |
| ---------------- | ------------------------- | ---------------------------------------------------------------------------------------------- |
| lView            | `LView`                   | The component's parent view data.                                                              |
| nodeIndex        | `number`                  | The index instance of the node.                                                                |
| native           | `RNode`                   | The instance of the DOM node that is attached to the lNode.                                    |
| component        | `{}`                      | The instance of the Component node.                                                            |
| directives       | `any[]`                   | The list of active directives that exist on this element.                                      |
| localRefs        | `{ [key: string]: any; }` | The map of local references (local reference name => element or directive instance) that exist |
| on this element. |
