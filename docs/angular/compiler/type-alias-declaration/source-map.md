---
kind: TypeAliasDeclaration
name: SourceMap
module: compiler
---

# SourceMap

```ts
export type SourceMap = {
  version: number;
  file?: string;
  sourceRoot: string;
  sources: string[];
  sourcesContent: (string | null)[];
  mappings: string;
};
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/source_map.ts#L23-L30)
