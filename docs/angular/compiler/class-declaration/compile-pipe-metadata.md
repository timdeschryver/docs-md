---
kind: ClassDeclaration
name: CompilePipeMetadata
module: compiler
---

# CompilePipeMetadata

```ts
class CompilePipeMetadata {
  type: CompileTypeMetadata;
  name: string;
  pure: boolean;

  toSummary(): CompilePipeSummary;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L530-L553)

## Properties

| Name | Type                  | Description |
| ---- | --------------------- | ----------- |
| type | `CompileTypeMetadata` |             |
| name | `string`              |             |
| pure | `boolean`             |             |

## Methods

### toSummary

```ts
toSummary(): CompilePipeSummary;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L545-L552)
