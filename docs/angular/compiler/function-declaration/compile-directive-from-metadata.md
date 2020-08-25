---
kind: FunctionDeclaration
name: compileDirectiveFromMetadata
module: compiler
---

# compileDirectiveFromMetadata

## description

Compile a directive for the render3 runtime as defined by the `R3DirectiveMetadata`.

```ts
function compileDirectiveFromMetadata(
  meta: R3DirectiveMetadata,
  constantPool: ConstantPool,
  bindingParser: BindingParser
): R3DirectiveDef;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/view/compiler.ts#L120-L131)

## Parameters

| Name          | Type                  | Description |
| ------------- | --------------------- | ----------- |
| meta          | `R3DirectiveMetadata` |             |
| constantPool  | `ConstantPool`        |             |
| bindingParser | `BindingParser`       |             |
