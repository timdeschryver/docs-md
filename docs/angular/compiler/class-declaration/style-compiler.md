---
kind: ClassDeclaration
name: StyleCompiler
module: compiler
---

# StyleCompiler

```ts
class StyleCompiler {
  compileComponent(
    outputCtx: OutputContext,
    comp: CompileDirectiveMetadata
  ): CompiledStylesheet;
  compileStyles(
    outputCtx: OutputContext,
    comp: CompileDirectiveMetadata,
    stylesheet: CompileStylesheetMetadata,
    shim: boolean = this.needsStyleShim(comp)
  ): CompiledStylesheet;
  needsStyleShim(comp: CompileDirectiveMetadata): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/style_compiler.ts#L32-L90)

## Methods

### compileComponent

```ts
compileComponent(outputCtx: OutputContext, comp: CompileDirectiveMetadata): CompiledStylesheet;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/style_compiler.ts#L37-L46)

#### Parameters (#compileComponent-parameters)

| Name      | Type                       | Description |
| --------- | -------------------------- | ----------- |
| outputCtx | `OutputContext`            |             |
| comp      | `CompileDirectiveMetadata` |             |

### compileStyles

```ts
compileStyles(   outputCtx: OutputContext, comp: CompileDirectiveMetadata,   stylesheet: CompileStylesheetMetadata,   shim: boolean = this.needsStyleShim(comp)): CompiledStylesheet;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/style_compiler.ts#L48-L53)

#### Parameters (#compileStyles-parameters)

| Name       | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| outputCtx  | `OutputContext`             |             |
| comp       | `CompileDirectiveMetadata`  |             |
| stylesheet | `CompileStylesheetMetadata` |             |
| shim       | `boolean`                   |             |

### needsStyleShim

```ts
needsStyleShim(comp: CompileDirectiveMetadata): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/style_compiler.ts#L55-L57)

#### Parameters (#needsStyleShim-parameters)

| Name | Type                       | Description |
| ---- | -------------------------- | ----------- |
| comp | `CompileDirectiveMetadata` |             |
