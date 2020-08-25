---
kind: FunctionDeclaration
name: ɵɵprojectionDef
module: core
---

# ɵɵprojectionDef

## description

Instruction to distribute projectable nodes among <ng-content> occurrences in a given template.
It takes all the selectors from the entire component's template and decides where
each projected node belongs (it re-distributes nodes among "buckets" where each "bucket" is
backed by a selector).

This function requires CSS selectors to be provided in 2 forms: parsed (by a compiler) and text,
un-parsed form.

The parsed form is needed for efficient matching of a node against a given CSS selector.
The un-parsed, textual form is needed for support of the ngProjectAs attribute.

Having a CSS selector in 2 different formats is not ideal, but alternatives have even more
drawbacks:

- having only a textual form would require runtime parsing of CSS selectors;
- we can't have only a parsed as we can't re-construct textual form from it (as entered by a
  template author).

```ts
function ɵɵprojectionDef(projectionSlots?: ProjectionSlots): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/instructions/projection.ts#L75-L104)

## Parameters

| Name             | Type              | Description                                                      |
| ---------------- | ----------------- | ---------------------------------------------------------------- |
| projectionSlots? | ``                | A collection of projection slots. A projection slot can be based |
| projectionSlots  | `ProjectionSlots` |                                                                  |

## codeGenApi
