---
kind: InterfaceDeclaration
name: CompileQueryMetadata
module: compiler
---

# CompileQueryMetadata

```ts
interface CompileQueryMetadata {
  selectors: Array<CompileTokenMetadata>;
  descendants: boolean;
  first: boolean;
  propertyName: string;
  read: CompileTokenMetadata;
  static?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L165-L172)

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| selectors    | `CompileTokenMetadata[]` |             |
| descendants  | `boolean`                |             |
| first        | `boolean`                |             |
| propertyName | `string`                 |             |
| read         | `CompileTokenMetadata`   |             |
| static       | `boolean`                |             |
