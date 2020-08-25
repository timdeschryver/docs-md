---
kind: EnumDeclaration
name: InjectFlags
module: core
---

# InjectFlags

## description

Injection flags for DI.

```ts
export enum InjectFlags {
  // TODO(alxhub): make this 'const' when ngc no longer writes exports of it into ngfactory files.

  /** Check self and check parent injector if needed */
  Default = 0b0000,
  /**
   * Specifies that an injector should retrieve a dependency from any injector until reaching the
   * host element of the current component. (Only used with Element Injector)
   */
  Host = 0b0001,
  /** Don't ascend to ancestors of the node requesting injection. */
  Self = 0b0010,
  /** Skip the node that is requesting injection. */
  SkipSelf = 0b0100,
  /** Inject `defaultValue` instead if token not found. */
  Optional = 0b1000,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/di/interface/injector.ts#L15-L31)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## publicApi
