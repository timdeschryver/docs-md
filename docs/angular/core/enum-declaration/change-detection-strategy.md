---
kind: EnumDeclaration
name: ChangeDetectionStrategy
module: core
---

# ChangeDetectionStrategy

## description

The strategy that the default change detector uses to detect changes.
When set, takes effect the next time change detection is triggered.

```ts
export enum ChangeDetectionStrategy {
  /**
   * Use the `CheckOnce` strategy, meaning that automatic change detection is deactivated
   * until reactivated by setting the strategy to `Default` (`CheckAlways`).
   * Change detection can still be explicitly invoked.
   * This strategy applies to all child directives and cannot be overridden.
   */
  OnPush = 0,

  /**
   * Use the default `CheckAlways` strategy, in which change detection is automatic until
   * explicitly deactivated.
   */
  Default = 1,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/constants.ts#L18-L32)

## license

Copyright Google LLC All Rights Reserved.

Use of this source code is governed by an MIT-style license that can be
found in the LICENSE file at https://angular.io/license

## see

{@link ChangeDetectorRef#usage-notes Change detection usage}

## publicApi
