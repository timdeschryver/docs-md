---
kind: FunctionDeclaration
name: ɵɵCopyDefinitionFeature
module: core
---

# ɵɵCopyDefinitionFeature

## description

Copies the fields not handled by the `ɵɵInheritDefinitionFeature` from the supertype of a
definition.

This exists primarily to support ngcc migration of an existing View Engine pattern, where an
entire decorator is inherited from a parent to a child class. When ngcc detects this case, it
generates a skeleton definition on the child class, and applies this feature.

The `ɵɵCopyDefinitionFeature` then copies any needed fields from the parent class' definition,
including things like the component template function.

```ts
function ɵɵCopyDefinitionFeature(
  definition: DirectiveDef<any> | ComponentDef<any>
): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/render3/features/copy_definition_feature.ts#L67-L93)

## Parameters

| Name       | Type               | Description        |
| ---------- | ------------------ | ------------------ |
| definition | `DirectiveDef<any> | ComponentDef<any>` | The definition of a child class which inherits from a parent class with its |

## codeGenApi
