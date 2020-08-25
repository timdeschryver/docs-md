---
kind: ClassDeclaration
name: ViewCompiler
module: compiler
---

# ViewCompiler

```ts
class ViewCompiler {
  compileComponent(
    outputCtx: OutputContext,
    component: CompileDirectiveMetadata,
    template: TemplateAst[],
    styles: o.Expression,
    usedPipes: CompilePipeSummary[]
  ): ViewCompileResult;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/view_compiler/view_compiler.ts#L33-L78)

## Methods

### compileComponent

```ts
compileComponent(   outputCtx: OutputContext, component: CompileDirectiveMetadata, template: TemplateAst[],   styles: o.Expression, usedPipes: CompilePipeSummary[]): ViewCompileResult;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/view_compiler/view_compiler.ts#L36-L77)

#### Parameters (#compileComponent-parameters)

| Name      | Type                       | Description |
| --------- | -------------------------- | ----------- |
| outputCtx | `OutputContext`            |             |
| component | `CompileDirectiveMetadata` |             |
| template  | `TemplateAst[]`            |             |
| styles    | `o.Expression`             |             |
| usedPipes | `CompilePipeSummary[]`     |             |
