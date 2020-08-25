---
kind: FunctionDeclaration
name: createAotCompiler
module: compiler
---

# createAotCompiler

## description

Creates a new AotCompiler based on options and a host.

```ts
function createAotCompiler(
  compilerHost: AotCompilerHost,
  options: AotCompilerOptions,
  errorCollector?: (error: any, type?: any) => void
): { compiler: AotCompiler; reflector: StaticReflector };
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/compiler_factory.ts#L56-L103)

## Parameters

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| compilerHost   | `AotCompilerHost`                  |             |
| options        | `AotCompilerOptions`               |             |
| errorCollector | `(error: any, type?: any) => void` |             |
