---
kind: FunctionDeclaration
name: literalMap
module: compiler
---

# literalMap

```ts
function literalMap(
  values: { key: string; quoted: boolean; value: Expression }[],
  type: MapType | null = null
): LiteralMapExpr;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L1725-L1730)

## Parameters

| Name   | Type                                                     | Description |
| ------ | -------------------------------------------------------- | ----------- |
| values | `{ key: string; quoted: boolean; value: Expression; }[]` |             |
| type   | `MapType`                                                |             |
