---
kind: ClassDeclaration
name: ProviderMeta
module: compiler
---

# ProviderMeta

```ts
class ProviderMeta {
  token: any;
  useClass: Type | null;
  useValue: any;
  useExisting: any;
  useFactory: Function | null;
  dependencies: Object[] | null;
  multi: boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/compile_metadata.ts#L723-L748)

## Properties

| Name         | Type       | Description |
| ------------ | ---------- | ----------- |
| token        | `any`      |             |
| useClass     | `Type`     |             |
| useValue     | `any`      |             |
| useExisting  | `any`      |             |
| useFactory   | `Function` |             |
| dependencies | `Object[]` |             |
| multi        | `boolean`  |             |
