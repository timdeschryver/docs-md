---
kind: InterfaceDeclaration
name: CompileInjectableMetadata
module: compiler
---

# CompileInjectableMetadata

```ts
interface CompileInjectableMetadata {
  symbol: StaticSymbol;
  type: CompileTypeMetadata;
  providedIn?: StaticSymbol;
  useValue?: any;
  useClass?: StaticSymbol;
  useExisting?: StaticSymbol;
  useFactory?: StaticSymbol;
  deps?: any[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L143-L154)

## Properties

| Name        | Type                  | Description |
| ----------- | --------------------- | ----------- |
| symbol      | `StaticSymbol`        |             |
| type        | `CompileTypeMetadata` |             |
| providedIn  | `StaticSymbol`        |             |
| useValue    | `any`                 |             |
| useClass    | `StaticSymbol`        |             |
| useExisting | `StaticSymbol`        |             |
| useFactory  | `StaticSymbol`        |             |
| deps        | `any[]`               |             |
