---
kind: InterfaceDeclaration
name: CompileDiDependencyMetadata
module: compiler
---

# CompileDiDependencyMetadata

```ts
interface CompileDiDependencyMetadata {
  isAttribute?: boolean;
  isSelf?: boolean;
  isHost?: boolean;
  isSkipSelf?: boolean;
  isOptional?: boolean;
  isValue?: boolean;
  token?: CompileTokenMetadata;
  value?: any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L100-L109)

## Properties

| Name        | Type                   | Description |
| ----------- | ---------------------- | ----------- |
| isAttribute | `boolean`              |             |
| isSelf      | `boolean`              |             |
| isHost      | `boolean`              |             |
| isSkipSelf  | `boolean`              |             |
| isOptional  | `boolean`              |             |
| isValue     | `boolean`              |             |
| token       | `CompileTokenMetadata` |             |
| value       | `any`                  |             |
