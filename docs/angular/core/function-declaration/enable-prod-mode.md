---
kind: FunctionDeclaration
name: enableProdMode
module: core
---

# enableProdMode

## description

Disable Angular's development mode, which turns off assertions and other
checks within the framework.

One important assertion this disables verifies that a change detection pass
does not result in additional changes to any bindings (also known as
unidirectional data flow).

```ts
function enableProdMode(): void;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/util/is_dev_mode.ts#L43-L48)

## publicApi
