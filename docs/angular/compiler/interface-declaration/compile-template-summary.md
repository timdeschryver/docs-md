---
kind: InterfaceDeclaration
name: CompileTemplateSummary
module: compiler
---

# CompileTemplateSummary

## description

Summary Metadata regarding compilation of a template.

```ts
interface CompileTemplateSummary {
  ngContentSelectors: string[];
  encapsulation: ViewEncapsulation | null;
  styles: string[];
  animations: any[] | null;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L193-L198)

## Properties

| Name               | Type                | Description |
| ------------------ | ------------------- | ----------- |
| ngContentSelectors | `string[]`          |             |
| encapsulation      | `ViewEncapsulation` |             |
| styles             | `string[]`          |             |
| animations         | `any[]`             |             |
