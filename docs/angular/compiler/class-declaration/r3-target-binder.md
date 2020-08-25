---
kind: ClassDeclaration
name: R3TargetBinder
module: compiler
---

# R3TargetBinder

## description

Processes `Target`s with a given set of directives and performs a binding operation, which
returns an object similar to TypeScript's `ts.TypeChecker` that contains knowledge about the
target.

```ts
class R3TargetBinder<DirectiveT extends DirectiveMeta>
  implements TargetBinder<DirectiveT> {
  bind(target: Target): BoundTarget<DirectiveT>;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L23-L54)

## Methods

### bind

#### description (#bind-description)

Perform a binding operation on the given `Target` and return a `BoundTarget` which contains
metadata about the types referenced in the template.

```ts
bind(target: Target): BoundTarget<DirectiveT>;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/t2_binder.ts#L30-L53)

#### Parameters (#bind-parameters)

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| target | `Target` |             |
