---
kind: EnumDeclaration
name: ɵChangeDetectorStatus
module: core
---

# ɵChangeDetectorStatus

## description

Defines the possible states of the default change detector.

```ts
export enum ChangeDetectorStatus {
  /**
   * A state in which, after calling `detectChanges()`, the change detector
   * state becomes `Checked`, and must be explicitly invoked or reactivated.
   */
  CheckOnce,

  /**
   * A state in which change detection is skipped until the change detector mode
   * becomes `CheckOnce`.
   */
  Checked,

  /**
   * A state in which change detection continues automatically until explicitly
   * deactivated.
   */
  CheckAlways,

  /**
   * A state in which a change detector sub tree is not a part of the main tree and
   * should be skipped.
   */
  Detached,

  /**
   * Indicates that the change detector encountered an error checking a binding
   * or calling a directive lifecycle method and is now in an inconsistent state. Change
   * detectors in this state do not detect changes.
   */
  Errored,

  /**
   * Indicates that the change detector has been destroyed.
   */
  Destroyed,
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/constants.ts#L38-L74)

## see

`ChangeDetectorRef`
