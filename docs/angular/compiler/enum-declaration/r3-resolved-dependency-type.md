---
kind: EnumDeclaration
name: R3ResolvedDependencyType
module: compiler
---

# R3ResolvedDependencyType

## description

Resolved type of a dependency.

Occasionally, dependencies will have special significance which is known statically. In that
case the `R3ResolvedDependencyType` informs the factory generator that a particular dependency
should be generated specially (usually by calling a special injection function instead of the
standard one).

```ts
export enum R3ResolvedDependencyType {
  /**
   * A normal token dependency.
   */
  Token = 0,

  /**
   * The dependency is for an attribute.
   *
   * The token expression is a string representing the attribute name.
   */
  Attribute = 1,

  /**
   * Injecting the `ChangeDetectorRef` token. Needs special handling when injected into a pipe.
   */
  ChangeDetectorRef = 2,

  /**
   * An invalid dependency (no token could be determined). An error should be thrown at runtime.
   */
  Invalid = 3,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_factory.ts#L111-L133)
