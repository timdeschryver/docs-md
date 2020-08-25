---
kind: InterfaceDeclaration
name: CompileTypeSummary
module: compiler
---

# CompileTypeSummary

## description

A CompileSummary is the data needed to use a directive / pipe / module
in other modules / components. However, this data is not enough to compile
the directive / module itself.

```ts
interface CompileTypeSummary {
  summaryKind: CompileSummaryKind | null;
  type: CompileTypeMetadata;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L95-L98)

## Properties

| Name        | Type                  | Description |
| ----------- | --------------------- | ----------- |
| summaryKind | `CompileSummaryKind`  |             |
| type        | `CompileTypeMetadata` |             |
