---
kind: InterfaceDeclaration
name: R3InjectorMetadata
module: compiler
---

# R3InjectorMetadata

```ts
interface R3InjectorMetadata {
  name: string;
  type: R3Reference;
  internalType: o.Expression;
  deps: R3DependencyMetadata[] | null;
  providers: o.Expression | null;
  imports: o.Expression[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/render3/r3_module_compiler.ts#L227-L234)

## Properties

| Name         | Type                     | Description |
| ------------ | ------------------------ | ----------- |
| name         | `string`                 |             |
| type         | `R3Reference`            |             |
| internalType | `o.Expression`           |             |
| deps         | `R3DependencyMetadata[]` |             |
| providers    | `o.Expression`           |             |
| imports      | `o.Expression[]`         |             |
