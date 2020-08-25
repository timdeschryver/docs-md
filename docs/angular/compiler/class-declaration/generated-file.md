---
kind: ClassDeclaration
name: GeneratedFile
module: compiler
---

# GeneratedFile

```ts
class GeneratedFile {
  public source: string | null;
  public stmts: Statement[] | null;

  isEquivalent(other: GeneratedFile): boolean;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/generated_file.ts#L12-L41)

## Properties

| Name   | Type          | Description |
| ------ | ------------- | ----------- |
| source | `string`      |             |
| stmts  | `Statement[]` |             |

## Methods

### isEquivalent

```ts
isEquivalent(other: GeneratedFile): boolean;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/aot/generated_file.ts#L27-L40)

#### Parameters (#isEquivalent-parameters)

| Name  | Type            | Description |
| ----- | --------------- | ----------- |
| other | `GeneratedFile` |             |
