---
kind: InterfaceDeclaration
name: R3InjectableMetadata
module: compiler
---

# R3InjectableMetadata

```ts
interface R3InjectableMetadata {
  name: string;
  type: R3Reference;
  internalType: o.Expression;
  typeArgumentCount: number;
  providedIn: o.Expression;
  useClass?: o.Expression;
  useFactory?: o.Expression;
  useExisting?: o.Expression;
  useValue?: o.Expression;
  userDeps?: R3DependencyMetadata[];
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/injectable_compiler_2.ts#L20-L31)

## Properties

| Name              | Type                     | Description |
| ----------------- | ------------------------ | ----------- |
| name              | `string`                 |             |
| type              | `R3Reference`            |             |
| internalType      | `o.Expression`           |             |
| typeArgumentCount | `number`                 |             |
| providedIn        | `o.Expression`           |             |
| useClass          | `o.Expression`           |             |
| useFactory        | `o.Expression`           |             |
| useExisting       | `o.Expression`           |             |
| useValue          | `o.Expression`           |             |
| userDeps          | `R3DependencyMetadata[]` |             |
