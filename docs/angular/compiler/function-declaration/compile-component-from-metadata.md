---
kind: FunctionDeclaration
name: compileComponentFromMetadata
module: compiler
---

# compileComponentFromMetadata

## description

Compile a component for the render3 runtime as defined by the `R3ComponentMetadata`.

```ts
function compileComponentFromMetadata(
  meta: R3ComponentMetadata,
  constantPool: ConstantPool,
  bindingParser: BindingParser
): R3ComponentDef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/compiler.ts#L136-L265)

## Parameters

| Name          | Type                  | Description |
| ------------- | --------------------- | ----------- |
| meta          | `R3ComponentMetadata` |             |
| constantPool  | `ConstantPool`        |             |
| bindingParser | `BindingParser`       |             |
