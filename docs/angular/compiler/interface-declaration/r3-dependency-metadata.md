---
kind: InterfaceDeclaration
name: R3DependencyMetadata
module: compiler
---

# R3DependencyMetadata

## description

Metadata representing a single dependency to be injected into a constructor or function call.

```ts
interface R3DependencyMetadata {
  token: o.Expression;
  attribute: o.Expression | null;
  resolved: R3ResolvedDependencyType;
  host: boolean;
  optional: boolean;
  self: boolean;
  skipSelf: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_factory.ts#L138-L176)

## Properties

| Name      | Type           | Description                                                                               |
| --------- | -------------- | ----------------------------------------------------------------------------------------- |
| token     | `o.Expression` | An expression representing the token or value to be injected.                             |
| attribute | `o.Expression` | If an @Attribute decorator is present, this is the literal type of the attribute name, or |

the unknown type if no literal type is available (e.g. the attribute name is an expression).
Will be null otherwise. |
| resolved | `R3ResolvedDependencyType` | An enum indicating whether this dependency has special meaning to Angular and needs to be
injected specially. |
| host | `boolean` | Whether the dependency has an @Host qualifier. |
| optional | `boolean` | Whether the dependency has an @Optional qualifier. |
| self | `boolean` | Whether the dependency has an @Self qualifier. |
| skipSelf | `boolean` | Whether the dependency has an @SkipSelf qualifier. |
