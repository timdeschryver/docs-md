---
kind: InterfaceDeclaration
name: CompileProviderMetadata
module: compiler
---

# CompileProviderMetadata

```ts
interface CompileProviderMetadata {
  token: CompileTokenMetadata;
  useClass?: CompileTypeMetadata;
  useValue?: any;
  useExisting?: CompileTokenMetadata;
  useFactory?: CompileFactoryMetadata;
  deps?: CompileDiDependencyMetadata[];
  multi?: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L111-L119)

## Properties

| Name        | Type                            | Description |
| ----------- | ------------------------------- | ----------- |
| token       | `CompileTokenMetadata`          |             |
| useClass    | `CompileTypeMetadata`           |             |
| useValue    | `any`                           |             |
| useExisting | `CompileTokenMetadata`          |             |
| useFactory  | `CompileFactoryMetadata`        |             |
| deps        | `CompileDiDependencyMetadata[]` |             |
| multi       | `boolean`                       |             |
