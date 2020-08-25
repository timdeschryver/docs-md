---
kind: InterfaceDeclaration
name: CompilePipeSummary
module: compiler
---

# CompilePipeSummary

```ts
interface CompilePipeSummary {
  type: CompileTypeMetadata;
  name: string;
  pure: boolean;

  // inherited from CompileTypeSummary
  summaryKind: CompileSummaryKind | null;
  type: CompileTypeMetadata;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L524-L528)

## Properties

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| type | `CompileTypeMetadata` |             |
| name | `string`              |             |
| pure | `boolean`             |             |
