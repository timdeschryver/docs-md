---
kind: ClassDeclaration
name: NgModuleCompiler
module: compiler
---

# NgModuleCompiler

```ts
class NgModuleCompiler {
  compile(
    ctx: OutputContext,
    ngModuleMeta: CompileNgModuleMetadata,
    extraProviders: CompileProviderMetadata[]
  ): NgModuleCompileResult;
  createStub(ctx: OutputContext, ngModuleReference: any);
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_compiler.ts#L25-L86)

## Methods

### compile

```ts
compile(   ctx: OutputContext, ngModuleMeta: CompileNgModuleMetadata,   extraProviders: CompileProviderMetadata[]): NgModuleCompileResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_compiler.ts#L27-L67)

#### Parameters (#compile-parameters)

| Name           | Type                        | Description |
| -------------- | --------------------------- | ----------- |
| ctx            | `OutputContext`             |             |
| ngModuleMeta   | `CompileNgModuleMetadata`   |             |
| extraProviders | `CompileProviderMetadata[]` |             |

### createStub

```ts
createStub(ctx: OutputContext, ngModuleReference: any);
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/ng_module_compiler.ts#L69-L71)

#### Parameters (#createStub-parameters)

| Name              | Type            | Description |
| ----------------- | --------------- | ----------- |
| ctx               | `OutputContext` |             |
| ngModuleReference | `any`           |             |
