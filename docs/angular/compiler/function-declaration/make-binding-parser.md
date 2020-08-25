---
kind: FunctionDeclaration
name: makeBindingParser
module: compiler
---

# makeBindingParser

## description

Construct a `BindingParser` with a default configuration.

```ts
function makeBindingParser(
  interpolationConfig: InterpolationConfig = DEFAULT_INTERPOLATION_CONFIG
): BindingParser;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/template.ts#L2070-L2074)

## Parameters

| Name                | Type                  | Description |
| ------------------- | --------------------- | ----------- |
| interpolationConfig | `InterpolationConfig` |             |
