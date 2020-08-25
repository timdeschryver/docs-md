---
kind: ClassDeclaration
name: MapType
module: compiler
---

# MapType

```ts
class MapType extends Type {
  public valueType: Type | null;

  visitType(visitor: TypeVisitor, context: any): any;
}
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L74-L83)

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| valueType | `Type` |             |

## Methods

### visitType

```ts
visitType(visitor: TypeVisitor, context: any): any;
```

[Link to repo](https://github.com/timdeschryver/angular/blob/master/packages/compiler/src/output/output_ast.ts#L80-L82)

#### Parameters (#visitType-parameters)

| Name    | Type          | Description |
| ------- | ------------- | ----------- |
| visitor | `TypeVisitor` |             |
| context | `any`         |             |
