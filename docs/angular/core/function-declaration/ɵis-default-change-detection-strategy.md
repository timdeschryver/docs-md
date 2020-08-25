---
kind: FunctionDeclaration
name: ɵisDefaultChangeDetectionStrategy
module: core
---

# ɵisDefaultChangeDetectionStrategy

## description

Reports whether a given strategy is currently the default for change detection.

```ts
function isDefaultChangeDetectionStrategy(
  changeDetectionStrategy: ChangeDetectionStrategy
): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/change_detection/constants.ts#L83-L87)

## Parameters

| Name                    | Type                      | Description            |
| ----------------------- | ------------------------- | ---------------------- |
| changeDetectionStrategy | `ChangeDetectionStrategy` | The strategy to check. |

## returns

True if the given strategy is the current default, false otherwise.

## see

`ChangeDetectorStatus`
`ChangeDetectorRef`
