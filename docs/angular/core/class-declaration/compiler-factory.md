---
kind: ClassDeclaration
name: CompilerFactory
module: core
---

# CompilerFactory

## description

A factory for creating a Compiler

```ts
class CompilerFactory {
  abstract createCompiler(options?: CompilerOptions[]): Compiler;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L166-L168)

## publicApi

## Methods

### createCompiler

```ts
abstract createCompiler(options?: CompilerOptions[]): Compiler;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/core/src/linker/compiler.ts#L167-L167)

#### Parameters (#createCompiler-parameters)

| Name    | Type                | Description |
| ------- | ------------------- | ----------- |
| options | `CompilerOptions[]` |             |
